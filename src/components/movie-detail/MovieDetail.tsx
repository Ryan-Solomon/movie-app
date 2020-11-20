import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

type TStatus = 'idle' | 'loading' | 'error';

type TMovieDetail = {
  backdrop_path: string;
  title: string;
  overview: string;
  runtime: number;
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<TMovieDetail>();
  const [status, setStatus] = useState<TStatus>('idle');
  const history = useHistory();

  useEffect(() => {
    setStatus('loading');
    const fetchMovieByTitle = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_UPCOMING_MOVIE_SEARCH_API_KEY}&language=en-US`
        );

        const data = await res.json();
        if (data.Error) {
          setStatus('error');
        }
        setMovie(data);
        setStatus('idle');
      } catch (err) {
        console.error(err);
        setStatus('error');
      }
    };
    fetchMovieByTitle();
  }, [id]);

  if (status === 'loading')
    return <h1 style={{ color: 'whitesmoke' }}>Loading...</h1>;
  if (status === 'error') {
    history.push('/error');
  }

  return (
    <div className='wrapper'>
      <h2>Hover for details</h2>
      <div className='card'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='descriptions'>
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>

          <h3>
            <span>Runtime - </span> {movie?.runtime} minutes
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
