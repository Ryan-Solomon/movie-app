export const baseUrl =
  '"https://movie-database-imdb-alternative.p.rapidapi.com';

export const requestConfig = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': `${process.env.REACT_APP_MOVIE_SEARCH_API_KEY}`,
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
  },
};

export type TRequestConfig = typeof requestConfig;
