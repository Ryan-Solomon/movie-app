import React, { FC } from 'react';

// This is a comment

type Props = {
  dadJoke: string;
};

const DadJoke: FC<Props> = ({ dadJoke }) => {
  return <h2 data-testid='dad-joke'>{dadJoke}</h2>;
};

export default DadJoke;
