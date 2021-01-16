import React from 'react';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { useAuthContext } from '../../context/authContext';
import { LoginButton } from '../login-button/LoginButton';
import { LogoutButton } from '../logout-button/LogoutButton';

export const UserIcon = () => {
  const {
    currentUser: { email },
  } = useAuthContext();
  const loginOrLogoutButton =
    email.length > 0 ? <LogoutButton /> : <LoginButton />;

  return (
    <SIconContainer>
      <IconContext.Provider
        value={{
          style: {
            opacity: '1',
            background: '#cacaca',
            verticalAlign: 'center',
          },
        }}
      >
        <FaUserCircle size={34} />
      </IconContext.Provider>
      <SButtonContainer>{loginOrLogoutButton}</SButtonContainer>
    </SIconContainer>
  );
};

const SButtonContainer = styled.div`
  display: none;
`;
const SIconContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover ${SButtonContainer} {
    display: block;
  }
`;
