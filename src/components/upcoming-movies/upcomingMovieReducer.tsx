export type UpcomingMovie = {
  poster_path: string;
  overview: string;
  release_date: string;
  id: number;
  title: string;
};

type TState = {
  upcomingFilms: UpcomingMovie[];
  status: 'loading' | 'idle' | 'error';
};

export const initialState: TState = {
  upcomingFilms: [],
  status: 'idle',
};

type TAction =
  | {
      type: 'FETCH_MOVIES';
    }
  | { type: 'SET_MOVIES'; payload: UpcomingMovie[] }
  | {
      type: 'SET_ERROR';
    };

export function upcomingMovieReducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        status: 'loading',
      };
    case 'SET_MOVIES':
      return {
        ...state,
        upcomingFilms: action.payload,
        status: 'idle',
      };
    case 'SET_ERROR':
      return {
        ...state,
        status: 'error',
      };
    default:
      return { ...state };
  }
}
