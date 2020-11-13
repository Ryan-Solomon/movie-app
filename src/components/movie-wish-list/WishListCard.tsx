import React from 'react';

import './WishListCard.styles.css';

const WishListCard = () => {
  // Add an onClick to route to the movie details for this movie

  return (
    <ul className='tilesWrap'>
      <li>
        <h2>01</h2>
        <h3>Avengers</h3>
        <p></p>
        <button>View Details</button>
      </li>
    </ul>
  );
};

export default WishListCard;
