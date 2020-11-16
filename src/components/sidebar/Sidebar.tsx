import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Sidebar.styles.css';
import { Link } from 'react-router-dom';

export default (props: any) => {
  return (
    <Menu right>
      <Link className='menu-item' to='/'>
        Home
      </Link>
      <Link className='menu-item' to='/moviesearch'>
        Search A Movie
      </Link>
      <Link className='menu-item' to='/movietrivia'>
        Movie Trivia
      </Link>
      <Link className='menu-item' to='/dadjokes'>
        Dad Jokes
      </Link>
    </Menu>
  );
};
