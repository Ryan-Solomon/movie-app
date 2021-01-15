import React from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../context/authContext';

export const SignUp = () => {
  return (
    <SContainer>
      <STitle>Sign Up</STitle>
      <SForm>
        <SFormSection>
          <SLabel htmlFor='email'>Email</SLabel>
          <SInput id='email' />
        </SFormSection>
        <SFormSection>
          <SLabel htmlFor='password'>Password</SLabel>
          <SInput id='password' />
        </SFormSection>
        <SFormSection>
          <SLabel htmlFor='confirm-password'>Confirm Password</SLabel>
          <SInput id='confirm-password' />
        </SFormSection>
        <SBtnTextContainer>
          <SButton type='submit'>Submit</SButton>
          <SText>Login Here</SText>
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
