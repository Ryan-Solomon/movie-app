import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

type TInitialContext = {
  dadJoke: string;
  loading: boolean;
  error: boolean;
  fetchDadJoke: () => void;
};

const initialContext: TInitialContext = {
  dadJoke: '',
  loading: false,
  error: false,
  fetchDadJoke: () => null,
};

const DadJokeContext = createContext<TInitialContext>(initialContext);

type State = {
  dadJoke: string;
  loading: boolean;
  error: boolean;
};

const initialState: State = {
  dadJoke: '',
  loading: false,
  error: false,
};

type Action =
  | { type: 'SET_DAD_JOKE'; payload: string }
  | { type: 'ERROR' }
  | { type: 'LOADING' };

const dadJokeReducer = (prevState = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_DAD_JOKE':
      return { dadJoke: action.payload, error: false, loading: false };
    case 'ERROR':
      return { ...prevState, error: true, loading: false };
    case 'LOADING':
      return { ...prevState, loading: true };
    default:
      return { ...prevState };
  }
};

export const DadJokeProvider: FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(dadJokeReducer, initialState);
  const { dadJoke, loading, error } = state!;

  const fetchDadJoke = async () => {
    dispatch({
      type: 'LOADING',
    });
    try {
      const res = await fetch('https://icanhazdadjoke.com/slack');
      const { attachments } = await res.json();
      dispatch({
        type: 'SET_DAD_JOKE',
        payload: attachments[0].text,
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
      });
      console.error(err);
    }
  };

  return (
    <DadJokeContext.Provider value={{ dadJoke, loading, error, fetchDadJoke }}>
      {children}
    </DadJokeContext.Provider>
  );
};

export const useDadJokeContext = () => {
  return useContext(DadJokeContext);
};
