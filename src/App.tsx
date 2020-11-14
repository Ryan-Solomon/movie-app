import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
// PAGE IMPORTS
import HomePage from './pages/HomePage';
import MovieSearchPage from './pages/MovieSearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieTriviaPage from './pages/MovieTriviaPage';
import MovieWishlistPage from './pages/MovieWatchlistPage';
import ErrorPage from './pages/ErrorPage';
// PACKAGE IMPORTS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
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
        <Route exact path='/moviewatchlist'>
          <MovieWishlistPage />
        </Route>
        <Route exact path='/moviedetails/:id'>
          <MovieDetailsPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
