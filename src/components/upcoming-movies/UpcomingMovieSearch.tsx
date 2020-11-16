import React, { useEffect, useReducer } from 'react';
import { upcomingMovieReducer, initialState } from './upcomingMovieReducer';

const UpcomingMovieSearch = () => {
  const [state, dispatch] = useReducer(upcomingMovieReducer, initialState);

  const fetchUpcomingMovies = async () => {
    dispatch({
      type: 'FETCH_MOVIES',
    });
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_UPCOMING_MOVIE_SEARCH_API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      dispatch({
        type: 'SET_MOVIES',
        payload: data.results,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: 'SET_ERROR' });
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  console.log(state);

  return (
    <div>
      <h1 style={{ color: 'white' }}>Movie Search</h1>
    </div>
  );
};

export default UpcomingMovieSearch;
