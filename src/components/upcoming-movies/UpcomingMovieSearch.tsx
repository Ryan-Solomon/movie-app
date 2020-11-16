import React, { useEffect, useReducer, useState } from 'react';
import { upcomingMovieReducer, initialState } from './upcomingMovieReducer';
import UpcomingMovieItem from './UpcomingMovieItem';
import { useHistory, useLocation } from 'react-router-dom';

const UpcomingMovieSearch = () => {
  const [state, dispatch] = useReducer(upcomingMovieReducer, initialState);
  const history = useHistory();
  const [searchType, setSearchType] = useState('');
  const { pathname } = useLocation();
  const searchParam = pathname.substring(1);

  useEffect(() => {
    switch (searchParam) {
      case 'popular':
        setSearchType('Popular');
        break;
      case 'top_rated':
        setSearchType('Top Rated');
        break;

      case 'upcoming':
        setSearchType('Upcoming');
        break;

      case 'now_playing':
        setSearchType('Now Playing');
        break;
      default:
        setSearchType('');
    }
  }, [searchParam]);

  const fetchUpcomingMovies = async () => {
    dispatch({
      type: 'FETCH_MOVIES',
    });
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${searchParam}?api_key=${process.env.REACT_APP_UPCOMING_MOVIE_SEARCH_API_KEY}&language=en-US&page=1`
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
  }, [searchParam]);

  const { status, upcomingFilms } = state;

  if (status === 'error') {
    history.push('/error');
  }

  return (
    <main className='search-container'>
      <section className='search-container__searchbar'>
        <div className='searchbar__title'>
          <h1>{searchType} Movies</h1>
        </div>
      </section>

      <section className='search-container__gallery'>
        {status === 'loading' ? (
          <h1 style={{ color: 'whitesmoke' }}>Loading...</h1>
        ) : (
          upcomingFilms.map((movie) => {
            return <UpcomingMovieItem key={movie.id} movie={movie} />;
          })
        )}
      </section>
    </main>
  );
};

export default UpcomingMovieSearch;
