import React, { FC } from 'react';
import { TMovie } from '../../types/types';
import './MovieItem.styles.css';

type Props = {
  movie: TMovie;
};

const MovieItem: FC<Props> = ({ movie }) => {
  return (
    <div className='movie-item'>
      <img src={movie.Poster} alt={movie.Title} />

      <div className='overlay'>
        <div className='movie-details'>
          <h2>{movie.Title}</h2>
          <h3>{movie.Year}</h3>
          <h5>click for more information</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
