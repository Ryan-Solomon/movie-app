export type TMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type TInitialMovieSearchContext = {
  movies: TMovie[];
  searchTerm: string;
  error: boolean;
  isLoading: boolean;
  setSearchTerm: (s: string) => void;
  setError: (e: boolean) => void;
};

export type TMovieDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
};
