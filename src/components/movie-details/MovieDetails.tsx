import { image } from 'faker';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMovieDetails } from '../../types/types';
import './MovieDetails.styles.css';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<TMovieDetails>();

  useEffect(() => {
    const fetchMovieByTitle = async () => {
      const res = await fetch(
        `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json&plot=short`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': `${process.env.REACT_APP_MOVIE_SEARCH_API_KEY}`,
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setMovie(data);
    };
    fetchMovieByTitle();
  }, [id]);

  return (
    <div className='wrapper'>
      <h2>Hover for details</h2>
      <div className='card'>
        <img src={movie?.Poster} />
        <div className='descriptions'>
          <h1>{movie?.Title}</h1>
          <p>{movie?.Plot}</p>
          <h3>
            <span>Directors - </span> {movie?.Director}
          </h3>
          <h3>
            <span>Actors - </span> {movie?.Actors}
          </h3>
          <h3>
            <span>Released - </span> {movie?.Released}
          </h3>
          <h3>
            <span>Runtime - </span> {movie?.Runtime}
          </h3>
          <h3>
            <span>Rating - </span> {movie?.imdbRating}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
