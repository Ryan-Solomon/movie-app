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
import DadJokesPage from './pages/DadJokesPage';
import Sidebar from './components/sidebar/Sidebar';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
// PACKAGE IMPORTS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id='outer-container'>
        <Sidebar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id='page-wrap'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/moviesearch'>
              <MovieSearchPage />
            </Route>
            <Route exact path='/upcomingmoviesearch'>
              <UpcomingMoviesPage />
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
            <Route exact path='/dadjokes'>
              <DadJokesPage />
            </Route>
            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
