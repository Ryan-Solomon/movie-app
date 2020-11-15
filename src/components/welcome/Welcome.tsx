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
              Get<span className='teal-word'> details</span> about your favorite
              movies
            </Link>
          </li>
          <li>
            <Link to='/movietrivia'>
              Play movie<span className='teal-word'> trivia</span>
            </Link>
          </li>
          <li>
            <Link to='/moviewatchlist'>
              Store movies to your <span className='teal-word'>watch list</span>
            </Link>
          </li>
          <li>
            <Link to='/dadjokes'>
              Grab some <span className='teal-word'>dad jokes</span> for your
              trip to the movies
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Welcome;
