import React, { useEffect, useReducer, useState } from 'react';
import { upcomingMovieReducer, initialState } from './upcomingMovieReducer';
import UpcomingMovieItem from './UpcomingMovieItem';
import { useHistory, useLocation } from 'react-router-dom';
import './UpcomingMovieSearch.styles.scss';

const UpcomingMovieSearch = () => {
  const [state, dispatch] = useReducer(upcomingMovieReducer, initialState);
  const history = useHistory();
  const [searchType, setSearchType] = useState('');
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const searchParam = pathname.substring(1);
  const [showNextPageButton, setShowNextPageButton] = useState(true);

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

  const changeMoviePage = (direction: 'NEXT' | 'PREVIOUS') => {
    switch (direction) {
      case 'NEXT':
        setPage((p) => p + 1);
        return;
      case 'PREVIOUS':
        if (!showNextPageButton) {
          setShowNextPageButton(true);
        }
        setPage((p) => (p - 1 >= 0 ? p - 1 : 0));
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      dispatch({
        type: 'FETCH_MOVIES',
      });
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${searchParam}?api_key=${process.env.REACT_APP_UPCOMING_MOVIE_SEARCH_API_KEY}&language=en-US&page=${page}`
        );
        const data = await res.json();
        if (page > data.page) {
          setShowNextPageButton(false);
          return;
        }
        dispatch({
          type: 'SET_MOVIES',
          payload: data.results,
        });
      } catch (err) {
        console.error(err);
        dispatch({ type: 'SET_ERROR' });
      }
    };
    fetchUpcomingMovies();
  }, [searchParam, page]);

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
      <div className='current-page'>
        <h4>Current Page: {page}</h4>
      </div>
      <div className='adjust-current-page-buttons'>
        <button
          disabled={page <= 1}
          className='btn'
          onClick={() => changeMoviePage('PREVIOUS')}
        >
          Previous Page
        </button>

        <button
          disabled={!showNextPageButton}
          className='btn'
          onClick={() => changeMoviePage('NEXT')}
        >
          Next Page
        </button>
      </div>
    </main>
  );
};

export default UpcomingMovieSearch;
