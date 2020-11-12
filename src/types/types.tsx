export type TMovie = {
  Title: string;
  Year: string;
  imbdID: string;
  Type: string;
  Poster: string;
};

export type TInitialMovieSearchContext = {
  movies: TMovie[];
  searchTerm: string;
  error: null | string;
  isLoading: boolean;
  setSearchTerm: (s: string) => void;
};
