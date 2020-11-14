import React, { useState } from 'react';
import TriviaDifficulty from './TriviaDifficulty';

type TDifficulty = 'easy' | 'medium' | 'hard';

const MovieTrivia = () => {
  const [difficulty, setDifficulty] = useState<TDifficulty>();

  return (
    <main>
      <TriviaDifficulty setDifficulty={setDifficulty} />
    </main>
  );
};

export default MovieTrivia;
