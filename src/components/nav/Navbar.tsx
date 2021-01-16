import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import './Nav.styles.css';
import { UserIcon } from '../user-icon/UserIcon';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__title'>
        <h1>
          <Link to='/'>
            {/* @ts-ignore */}
            Movie <span>Buff</span>
          </Link>
        </h1>
        <UserIcon />
      </div>
    </nav>
  );
};

export default Navbar;
