import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MovieSearchContextProvider } from './context/movieSearchContext';
import { DadJokeProvider } from './context/dadJokesContext';

ReactDOM.render(
  <React.StrictMode>
    <MovieSearchContextProvider>
      <DadJokeProvider>
        <App />
      </DadJokeProvider>
    </MovieSearchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
