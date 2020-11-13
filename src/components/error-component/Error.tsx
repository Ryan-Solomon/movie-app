import React from 'react';
import './Error.styles.css';
import { Link } from 'react-router-dom';
import { useMovieSearchContext } from '../../context/movieSearchContext';

const Welcome = () => {
  const { setError } = useMovieSearchContext();
  setError(false);

  return (
    <main className='welcome-container'>
      <section className='welcome-container__header'>
        <h1>Uh oh, something went wrong</h1>
        <div className='line'></div>
      </section>

      <section className='welcome-container__features'>
        <ul>
          <li>
            <Link to='/'>
              <span className='teal-word'>Head back home</span>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Welcome;
