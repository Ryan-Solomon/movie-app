import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TInitialMovieSearchContext, TMovie } from '../types/types';
import { requestConfig } from '../api/api';

const initialContext = {
  movies: [],
  searchTerm: '',
  error: false,
  isLoading: false,
  setSearchTerm: (s: string) => null,
  setError: (p: boolean) => null,
};

const MovieSearchContext = createContext<TInitialMovieSearchContext>(
  initialContext
);

export const MovieSearchContextProvider: FC<ReactNode> = ({ children }) => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
        if (data.Error) {
          setError(true);
          return;
        }
        setError(false);
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
        setError,
      }}
    >
      {children}
    </MovieSearchContext.Provider>
  );
};

export const useMovieSearchContext = () => {
  return useContext(MovieSearchContext);
};
