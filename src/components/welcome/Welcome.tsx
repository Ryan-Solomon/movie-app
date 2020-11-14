import React from 'react';
import './Welcome.styles.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <main className='welcome-container'>
      <section className='welcome-container__header'>
        <h1>Welcome To Movie Buff!</h1>
        <div className='line'></div>
      </section>

      <section className='welcome-container__features'>
        <ul>
          <li>
            <Link to='/moviesearch'>
              <span className='teal-word'>Get</span> details about your favorite
              movies
            </Link>
          </li>
          <li>
            <Link to='/movietrivia'>
              <span className='teal-word'>Play</span> movie trivia
            </Link>
          </li>
          <li>
            <Link to='/moviewatchlist'>
              <span className='teal-word'>Store</span> movies to your watch list
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Welcome;
