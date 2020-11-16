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
      <Link className='menu-item' to='/popular'>
        Popular Movies
      </Link>
      <Link className='menu-item' to='/top_rated'>
        Top Rated Movies
      </Link>
      <Link className='menu-item' to='/now_playing'>
        Now Playing
      </Link>
      <Link className='menu-item' to='/upcoming'>
        Upcoming Movies
      </Link>
      <Link className='menu-item' to='/moviewatchlist'>
        Movie Watch List
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
