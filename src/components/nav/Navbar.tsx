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
        <span className='icon'>
          <GiStrongMan size={32} />
        </span>
      </div>
      <div className='navbar__links'>
        <ul>
          <li>
            <Link to='/moviesearch'>Search Movies</Link>
          </li>
          <li>
            <Link to='/movietrivia'>Movie Trivia</Link>
          </li>
          <li>
            <Link to='/moviewatchlist'>Movie Watch List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
