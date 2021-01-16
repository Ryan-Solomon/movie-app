import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../context/authContext';

type resetStatus =
  | 'LOADING'
  | 'SUCCESS'
  | { type: 'ERROR'; message: string }
  | null;

export const ResetPassword = () => {
  const { resetPassword } = useAuthContext();
  const history = useHistory();
  const [signupStatus, setSignupStatus] = useState<resetStatus>(null);
  const [formState, setFormState] = useState({
    email: '',
  });

  const goToLogin = () => {
    history.push('/login');
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email } = formState;

    try {
      setSignupStatus('LOADING');
      await resetPassword(email);
      setSignupStatus('SUCCESS');
      history.push('/');
    } catch (e) {
      setSignupStatus({ type: 'ERROR', message: e.message });
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    whatInput: 'EMAIL'
  ) => {
    if (whatInput === 'EMAIL') {
      setFormState({ ...formState, email: e.target.value });
    }
  };

  return (
    <SContainer>
      {signupStatus && typeof signupStatus === 'object' && (
        <h3 style={{ color: 'red', marginBottom: '10px' }}>
          {signupStatus.message}
        </h3>
      )}
      {signupStatus === 'SUCCESS' && <h1>Password Reset Success</h1>}

      <STitle>Reset Password</STitle>
      <SForm onSubmit={handleFormSubmit}>
        <SFormSection>
          <SLabel htmlFor='email'>Email</SLabel>
          <SInput
            type='email'
            onChange={(e) => handleInputChange(e, 'EMAIL')}
            value={formState.email}
            id='email'
          />
        </SFormSection>

        <SBtnTextContainer>
          <SButton disabled={signupStatus === 'LOADING'} type='submit'>
            Submit
          </SButton>
          <Link to='/signup'>
            <SRedirectButton>
              <SText>Signup Here</SText>
            </SRedirectButton>
          </Link>
        </SBtnTextContainer>
      </SForm>
      <SForgotPasswordButton onClick={goToLogin}>
        <SForgotPasswordText>
          Remember your password? Click here.
        </SForgotPasswordText>
      </SForgotPasswordButton>
    </SContainer>
  );
};

const colors = {
  primaryTeal: '#66fcf1',
  primaryColorGrey: '#e4e4e4',
  primaryColorGreyBlue: '#1f2833',
  primaryColorDark: '#0b0c10',
};

const SContainer = styled.main`
  width: 70vw;
  margin: auto;
  margin-top: 5rem;
  padding: 3rem;
  box-shadow: 2px 2px 10px #ffffff;
`;

const SForgotPasswordButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const SForgotPasswordText = styled.h4`
  color: white;
  margin-top: 30px;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

const SRedirectButton = styled.button`
  background: none;
  outline: none;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

const SBtnTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const STitle = styled.h1`
  color: ${colors.primaryColorGrey};
  text-align: center;
  font-size: 2.5rem;
`;

const SText = styled.h3`
  color: ${colors.primaryColorGrey};
  margin-right: 1rem;
  font-size: 1.5rem;
`;

const SFormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const SForm = styled.form``;

const SInput = styled.input`
  padding: 0.5rem;
  font-size: 1.8rem;
  margin: 1rem 0;
`;

const SLabel = styled.label`
  color: ${colors.primaryColorGrey};
  font-size: 1.8rem;
`;

const SButton = styled.button`
  background-color: ${colors.primaryColorGreyBlue};
  border: 1px solid ${colors.primaryTeal};
  outline: none;
  color: ${colors.primaryColorGrey};
  font-size: 1.5rem;
  padding: 0.8rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.primaryTeal};
    border: 1px solid ${colors.primaryColorGrey};
    cursor: pointer;
    transform: scale(0.95);
  }
`;
