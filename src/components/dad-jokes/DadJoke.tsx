import React, { FC } from 'react';

type Props = {
  dadJoke: string;
};

const DadJoke: FC<Props> = ({ dadJoke }) => {
  return <h2>{dadJoke}</h2>;
};

export default DadJoke;
