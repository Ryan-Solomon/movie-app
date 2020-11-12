import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
// PAGE IMPORTS
import HomePage from './pages/HomePage';
import MovieSearchPage from './pages/MovieSearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieTriviaPage from './pages/MovieTriviaPage';
import MovieWishlistPage from './pages/MovieWishlistPage';
// PACKAGE IMPORTS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  console.log(process.env.REACT_APP_MOVIE_SEARCH_API_KEY);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/moviesearch'>
          <MovieSearchPage />
        </Route>
        <Route exact path='/movietrivia'>
          <MovieTriviaPage />
        </Route>
        <Route exact path='/moviewishlist'>
          <MovieWishlistPage />
        </Route>
        <Route exact path='/moviedetails/:id'>
          <MovieDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
