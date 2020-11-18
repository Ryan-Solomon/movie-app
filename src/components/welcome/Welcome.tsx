import React from 'react';
import './Welcome.styles.css';

const Welcome = () => {
  return (
    <main className='welcome-container'>
      <section className='welcome-container__header'>
        <h1>Welcome To Movie Buff!</h1>
        <div className='line'></div>
      </section>

      <section className='welcome-container__features'>
        <p>
          The place to be for searching movies, playing movie trivia, creating a
          watch list, and yes, we even have dad jokes for some entertainment
          between movies.
        </p>
      </section>
    </main>
  );
};

export default Welcome;

// Welcome animation and pulse hamburger menu
