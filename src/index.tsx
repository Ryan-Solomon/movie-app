import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MovieSearchContextProvider } from './context/movieSearchContext';
import { DadJokeProvider } from './context/dadJokesContext';
import { AuthContextProvider } from './context/authContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieSearchContextProvider>
        <DadJokeProvider>
          <App />
        </DadJokeProvider>
      </MovieSearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
