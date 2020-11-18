import React, { FC } from 'react';
import { UpcomingMovie } from './upcomingMovieReducer';
import './UpcomingMovieItem.styles.scss';
import { useHistory } from 'react-router-dom';

type Props = {
  movie: UpcomingMovie;
};

const UpcomingMovieItem: FC<Props> = ({ movie }) => {
  const history = useHistory();

  const showMovieDetails = () => {
    history.push(`/moviedetail/${movie.id}`);
  };

  return (
    <div onClick={showMovieDetails} className='movie-item'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className='overlay'>
        <div className='movie-details'>
          <h2>{movie.title}</h2>
          <h3>{movie.release_date}</h3>
          <h6>click for more information</h6>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovieItem;
