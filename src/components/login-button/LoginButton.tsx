import React from 'react';
import styled from 'styled-components';

export const LoginButton = () => {
  return (
    <SButton>
      <SText>Login</SText>
    </SButton>
  );
};

const SButton = styled.button`
  background: #cacaca;
  outline: none;
  border: none;
  height: 34px;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const SText = styled.h3`
  color: black;
  margin: 0 12px;
`;
