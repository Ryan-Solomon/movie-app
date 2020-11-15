import React from 'react';
import './DadJokes.scss';
import DadJoke from './DadJoke';
import { useDadJokeContext } from '../../context/dadJokesContext';

const DadJokes = () => {
  const { dadJoke, fetchDadJoke } = useDadJokeContext();

  return (
    <main className='dad-jokes-container'>
      <section className='dad-jokes-container__header'>
        <button onClick={fetchDadJoke} className='btn dad-joke-generator'>
          Generate A Dad Joke
        </button>
      </section>
      {dadJoke && (
        <section className='dad-joke'>
          <DadJoke dadJoke={dadJoke} />
        </section>
      )}
    </main>
  );
};

export default DadJokes;
