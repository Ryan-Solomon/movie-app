import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import { FaUserCircle } from 'react-icons/fa';
import './Nav.styles.css';
import { useAuthContext } from '../../context/authContext';
import { UserIcon } from '../user-icon/UserIcon';

const Navbar = () => {
  const { currentUser } = useAuthContext();
  const { email } = currentUser;
  return (
    <nav className='navbar'>
      <div className='navbar__title'>
        <h1>
          <Link to='/'>
            {/* @ts-ignore */}
            Movie <span>Buff</span>
          </Link>
        </h1>
        {email.length > 0 && <UserIcon />}
      </div>
    </nav>
  );
};

export default Navbar;
