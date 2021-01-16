import React from 'react';
import styled from 'styled-components';

export const LoginButton = () => {
  return (
    <SButton>
      <SText>Login</SText>
    </SButton>
  );
};

const SButton = styled.button``;

const SText = styled.h3`
  color: white;
`;
