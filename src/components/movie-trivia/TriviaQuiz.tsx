import React, { FC, useEffect } from 'react';
import './TriviaQuiz.styles.css';

type Props = {
  difficulty: 'easy' | 'medium' | 'hard';
};

const TriviaQuiz: FC<Props> = ({ difficulty }) => {
  const fetchMovieQuestions = async () => {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'
    );
    const { results } = await res.json();
  };

  useEffect(() => {
    fetchMovieQuestions();
  }, []);

  return (
    <main className='trivia-quiz-container'>
      <header className='trivia-question'>
        <h1>This is your question!</h1>
      </header>
      <section className='trivia-quiz-options'>
        <div className='option'>
          <h3>Option 1</h3>
        </div>
        <div className='option'>
          <h3>Option 2</h3>
        </div>
        <div className='option'>
          <h3>Option 3</h3>
        </div>
        <div className='option'>
          <h3>Option 4</h3>
        </div>
      </section>
    </main>
  );
};

export default TriviaQuiz;
