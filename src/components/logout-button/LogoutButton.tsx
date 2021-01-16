import React from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../context/authContext';

export const LogoutButton = () => {
  const { logout } = useAuthContext();
  return (
    <SButton onClick={logout}>
      <SText>Logout</SText>
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
