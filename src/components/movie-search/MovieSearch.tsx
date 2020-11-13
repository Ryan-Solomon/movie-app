import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMovieSearchContext } from '../../context/movieSearchContext';
import './MovieSearch.styles.css';
import useDebounce from './../../custom-hooks/hooks';
import MovieItem from './MovieItem';

const MovieSearch = () => {
  const { setSearchTerm, movies, error, isLoading } = useMovieSearchContext()!;
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    setSearchTerm(debouncedInput);
  }, [debouncedInput]);

  return (
    <main className='search-container'>
      <section className='search-container__searchbar'>
        <div className='searchbar__title'>
          <h1>Search a movie!</h1>
        </div>
        <div className='searchbar__input'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Search'
          />
          <div className='search-line'></div>
        </div>
      </section>

      <section className='search-container__gallery'>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          movies.map((movie) => {
            return <MovieItem key={movie.Title + movie.Year} movie={movie} />;
          })
        )}
      </section>
    </main>
  );
};

export default MovieSearch;
