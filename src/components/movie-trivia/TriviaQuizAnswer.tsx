import React, { FC } from 'react';

type Props = {
  answer: string;
  handleAnswer: (answer: string) => void;
};

const TriviaQuizAnswer: FC<Props> = ({ answer, handleAnswer }) => {
  return (
    <div onClick={() => handleAnswer(answer)} className='option'>
      <h3>{answer}</h3>
    </div>
  );
};

export default TriviaQuizAnswer;
