import React, { useState } from 'react';
import TriviaDifficulty from './TriviaDifficulty';
import TriviaQuiz from './TriviaQuiz';

type TDifficulty = 'easy' | 'medium' | 'hard';

const MovieTrivia = () => {
  const [difficulty, setDifficulty] = useState<TDifficulty>();

  return (
    <main>
      {difficulty ? (
        <TriviaQuiz difficulty={difficulty} />
      ) : (
        <TriviaDifficulty setDifficulty={setDifficulty} />
      )}
    </main>
  );
};

export default MovieTrivia;
