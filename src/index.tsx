import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MovieSearchContextProvider } from './context/movieSearchContext';

ReactDOM.render(
  <React.StrictMode>
    <MovieSearchContextProvider>
      <App />
    </MovieSearchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
