import React from 'react';
import { useMovieSearchContext } from '../../context/movieSearchContext';
import './MovieSearch.styles.css';

const MovieSearch = () => {
  const { searchTerm, setSearchTerm } = useMovieSearchContext()!;

  return (
    <main className='search-container'>
      <section className='search-container__searchbar'>
        <div className='searchbar__title'>
          <h1>Search a movie!</h1>
        </div>
        <div className='searchbar__input'>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
            placeholder='Search'
          />
          <div className='search-line'></div>
        </div>
      </section>

      <section className='search-container__gallery'>
        <h1>Item</h1>
      </section>
    </main>
  );
};

export default MovieSearch;
