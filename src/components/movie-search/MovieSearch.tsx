import React, { FormEvent, useState } from 'react';
import { useMovieSearchContext } from '../../context/movieSearchContext';
import './MovieSearch.styles.css';
import MovieItem from './MovieItem';
import { useHistory } from 'react-router-dom';

const MovieSearch = () => {
  const { setSearchTerm, movies, error, isLoading } = useMovieSearchContext()!;
  const [input, setInput] = useState('');
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  if (error) {
    history.push('/error');
  }
  console.log(error);

  return (
    <main className='search-container'>
      <section className='search-container__searchbar'>
        <div className='searchbar__title'>
          <h1>Search A Movie!</h1>
        </div>
        <div className='searchbar__input'>
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Search'
              onClick={() => setSearchTerm(input)}
            />
            <button className='btn' type='submit'>
              Search
            </button>
          </form>
          <div className='search-line'></div>
        </div>
      </section>

      <section className='search-container__gallery'>
        {isLoading ? (
          <h1 style={{ color: 'whitesmoke' }}>Loading...</h1>
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
