import React from 'react';
import WishListCard from './WishListCard';
import './MovieWishlist.styles.css';

const MovieWishlist = () => {
  return (
    <div className='wishlist-container'>
      <header>
        <h1>Add Movies To Your Watch List!</h1>
      </header>
      <div className='input'>
        <input type='text' placeholder='Movie Title' />
      </div>
      <section className='todo-container'>
        {/* Map over todos and add to ui */}
      </section>
    </div>
  );
};

export default MovieWishlist;
