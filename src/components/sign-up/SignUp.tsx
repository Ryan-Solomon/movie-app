import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../context/authContext';

type signupStatus =
  | 'LOADING'
  | 'SUCCESS'
  | { type: 'ERROR'; message: string }
  | null;

export const SignUp = () => {
  const { signup } = useAuthContext();
  const history = useHistory();
  const [signupStatus, setSignupStatus] = useState<signupStatus>(null);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formState;
    if (password !== confirmPassword) {
      return setSignupStatus({
        type: 'ERROR',
        message: "Passwords don't match",
      });
    }
    console.log(password);
    if (password.length < 6) {
      return setSignupStatus({
        type: 'ERROR',
        message: 'Password must be at least 6 characters',
      });
    }
    setSignupStatus('LOADING');
    try {
      await signup(email, password);
      setSignupStatus('SUCCESS');
      history.push('/');
    } catch (e) {
      setSignupStatus({ type: 'ERROR', message: e.message });
    }
  };
  console.log(signupStatus);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    whatInput: 'EMAIL' | 'PASSWORD' | 'CPASSWORD'
  ) => {
    if (whatInput === 'EMAIL') {
      setFormState({ ...formState, email: e.target.value });
    } else if (whatInput === 'PASSWORD') {
      setFormState({ ...formState, password: e.target.value });
    } else if (whatInput === 'CPASSWORD') {
      setFormState({ ...formState, confirmPassword: e.target.value });
    }
  };

  if (signupStatus === 'SUCCESS') history.push('/');

  return (
    <SContainer>
      {signupStatus && typeof signupStatus === 'object' && (
        <h3 style={{ color: 'red', marginBottom: '10px' }}>
          {signupStatus.message}
        </h3>
      )}

      <STitle>Sign Up</STitle>
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
        <SFormSection>
          <SLabel htmlFor='password'>Password</SLabel>
          <SInput
            type='password'
            onChange={(e) => handleInputChange(e, 'PASSWORD')}
            value={formState.password}
            id='password'
          />
        </SFormSection>
        <SFormSection>
          <SLabel htmlFor='confirm-password'>Confirm Password</SLabel>
          <SInput
            type='password'
            onChange={(e) => handleInputChange(e, 'CPASSWORD')}
            value={formState.confirmPassword}
            id='confirm-password'
          />
        </SFormSection>
        <SBtnTextContainer>
          <SButton disabled={signupStatus === 'LOADING'} type='submit'>
            Submit
          </SButton>
          <Link to='/login'>
            <SRedirectButton>
              <SText>Login Here</SText>
            </SRedirectButton>
          </Link>
        </SBtnTextContainer>
      </SForm>
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
