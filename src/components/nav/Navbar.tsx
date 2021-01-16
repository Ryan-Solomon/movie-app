import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import { FaUserCircle } from 'react-icons/fa';
import './Nav.styles.css';
import { useAuthContext } from '../../context/authContext';
import { IconContext } from 'react-icons';

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
        <IconContext.Provider
          value={{
            style: {
              opacity: '1',
              background: '#cacaca',
              verticalAlign: 'center',
            },
          }}
        >
          {email.length > 0 && <FaUserCircle size={34} />}
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
