import React from 'react';
import styled from 'styled-components';

export const SignUp = () => {
  return (
    <SContainer>
      <STitle>Sign Up</STitle>
      <SForm>
        <SFormSection>
          <SLabel>Email</SLabel>
          <SInput />
        </SFormSection>
        <SFormSection>
          <SLabel>Email</SLabel>
          <SInput />
        </SFormSection>
        <SFormSection>
          <SLabel>Email</SLabel>
          <SInput />
        </SFormSection>
        <SButton type='submit'>Submit</SButton>
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
  background-color: ${colors.primaryColorGreyBlue};
`;

const STitle = styled.h1`
  color: ${colors.primaryColorGrey};
`;

const SFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SForm = styled.form``;

const SInput = styled.input``;

const SLabel = styled.label`
  color: ${colors.primaryColorGrey};
`;

const SButton = styled.button`
  background: none;
  border: 1px solid ${colors.primaryTeal};
  outline: none;
  color: ${colors.primaryColorGrey};
  font-size: 1.5rem;
  padding: 0.8rem;
`;
