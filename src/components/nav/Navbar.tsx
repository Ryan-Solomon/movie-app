import React from 'react';
import { Link } from 'react-router-dom';
import { GiStrongMan } from 'react-icons/gi';
import './Nav.styles.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__title'>
        <h1>
          <Link to='/'>
            Movie <span>Buff</span>
          </Link>
        </h1>
        <div className='icon'>
          <GiStrongMan size={34} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
