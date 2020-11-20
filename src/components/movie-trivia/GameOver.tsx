import React, { FC } from 'react';
import './GameOver.styles.css';

type Props = {
  correctAnswers: number;
  setDifficulty: (s: 'easy' | 'medium' | 'hard' | null) => void;
};

const GameOver: FC<Props> = ({ correctAnswers, setDifficulty }) => {
  return (
    <main className='trivia-quiz-container'>
      <header className='trivia-question results-header'>
        <h1>Results</h1>
      </header>
      <section className='trivia-quiz-results'>
        <h2>{correctAnswers} out of 10 right</h2>
        {/* I should have 100% abstracted this logic into a function. I still may do so */}
        <h2>
          {correctAnswers === 0
            ? "Well, it's only up from here"
            : correctAnswers > 0 && correctAnswers < 5
            ? 'Could have been worse!'
            : correctAnswers >= 5 && correctAnswers < 8
            ? 'Over half correct, not bad!'
            : 'You know your stuff!'}
        </h2>
      </section>

      <button className='btn play-again' onClick={() => setDifficulty(null)}>
        Play Again
      </button>
    </main>
  );
};

export default GameOver;
