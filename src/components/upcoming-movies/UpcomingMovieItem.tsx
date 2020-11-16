import React, { FC } from 'react';
import { UpcomingMovie } from './upcomingMovieReducer';
import './UpcomingMovieItem.styles.scss';

type Props = {
  movie: UpcomingMovie;
};

const UpcomingMovieItem: FC<Props> = ({ movie }) => {
  return (
    <div className='movie-item'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className='overlay'>
        <div className='movie-details'>
          <h2>{movie.title}</h2>
          <h3>{movie.release_date}</h3>
          <p style={{ fontSize: '.9rem', lineHeight: '.9' }}>
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovieItem;
