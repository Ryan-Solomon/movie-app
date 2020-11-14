import React, { FC } from 'react';

import './WatchListCard.styles.css';

type Props = {
  todo: string;
  index: number;
  removeTodo: (todo: string) => void;
};

const WatchListCard: FC<Props> = ({ todo, index, removeTodo }) => {
  return (
    <ul className='tilesWrap'>
      <li>
        <h2>{index + 1}</h2>
        <h3>{todo}</h3>
        <p></p>
        <button onClick={() => removeTodo(todo)}>Remove</button>
      </li>
    </ul>
  );
};

export default WatchListCard;
