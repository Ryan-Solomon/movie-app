import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const LoginButton = () => {
  const history = useHistory();

  return (
    <SButton onClick={() => history.push('/login')}>
      <SText>Login</SText>
    </SButton>
  );
};

const SButton = styled.button`
  background: none;
  outline: none;
  border: 1px solid teal;
  height: 34px;
  transition: all 0.2s ease;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const SText = styled.h3`
  color: #fff;
  margin: 0 12px;
`;
