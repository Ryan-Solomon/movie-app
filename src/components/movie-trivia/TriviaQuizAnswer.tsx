import React, { FC } from 'react';

type Props = {
  answer: string;
};

const TriviaQuizAnswer: FC<Props> = ({ answer }) => {
  return (
    <div className='option'>
      <h3>{answer}</h3>
    </div>
  );
};

export default TriviaQuizAnswer;
