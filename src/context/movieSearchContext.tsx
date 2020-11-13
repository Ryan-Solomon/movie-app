import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TInitialMovieSearchContext, TMovie } from '../types/types';
import { baseUrl, requestConfig } from '../api/api';

const initialContext = {
  movies: [],
  searchTerm: '',
  error: null,
  isLoading: false,
  setSearchTerm: (s: string) => null,
};

const MovieSearchContext = createContext<TInitialMovieSearchContext>(
  initialContext
);

export const MovieSearchContextProvider: FC<ReactNode> = ({ children }) => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesByTerm = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${
            searchTerm.length > 0 ? searchTerm : 'avengers'
          }&page=1&r=json`,
          requestConfig
        );
        const data = await res.json();
        setError(null);
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    fetchMoviesByTerm();
  }, [searchTerm]);

  return (
    <MovieSearchContext.Provider
      value={{
        movies,
        searchTerm,
        error,
        isLoading,
        setSearchTerm,
      }}
    >
      {children}
    </MovieSearchContext.Provider>
  );
};

export const useMovieSearchContext = () => {
  return useContext(MovieSearchContext);
};
