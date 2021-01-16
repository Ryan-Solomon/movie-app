import React from 'react';
import styled from 'styled-components';

export const LogoutButton = () => {
  return (
    <SButton>
      <SText>Logout</SText>
    </SButton>
  );
};

const SButton = styled.button``;

const SText = styled.h3`
  color: white;
`;
