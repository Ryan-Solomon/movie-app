import React, { FormEvent, useEffect, useReducer, useState } from 'react';
import WatchListCard from './WatchListCard';
import './MovieWatchlist.styles.css';

type TAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'SET_ALL_MOVIES'; payload: string[] }
  | { type: 'REMOVE_TODO'; payload: string };

interface TState {
  todos: string[];
}

const initialState: TState = {
  todos: [],
};

const todoReducer = (prevState: TState, action: TAction): TState => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...prevState, todos: [...prevState.todos, action.payload] };
    case 'REMOVE_TODO':
      return {
        ...prevState,
        todos: prevState.todos.filter((todo) => todo !== action.payload),
      };
    case 'SET_ALL_MOVIES':
      return {
        ...prevState,
        todos: action.payload,
      };
    default:
      return { ...prevState };
  }
};

const MovieWishlist = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  useEffect(() => {
    const moviesFromStorage = localStorage.getItem('movies');
    if (moviesFromStorage) {
      dispatch({
        type: 'SET_ALL_MOVIES',
        payload: JSON.parse(moviesFromStorage),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(state.todos));
  }, [state.todos]);

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: input,
    });
    setInput('');
  };

  const handleRemoveTodo = (todo: string) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todo,
    });
  };

  return (
    <main className='todo-container'>
      <section className='todo-container__todobar'>
        <div className='todobar__title'>
          <h1>Add A Movie To Your Watch List</h1>
        </div>
        <div className='todobar__input'>
          <form onSubmit={handleAddTodo}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Movie Title'
            />
            <button className='btn' type='submit'>
              Add
            </button>
          </form>
          <div className='todo-line'></div>
        </div>
      </section>

      <section className='todo-container__gallery'>
        {state.todos &&
          state.todos.map((todo, idx) => {
            return (
              <WatchListCard
                removeTodo={handleRemoveTodo}
                key={todo + idx}
                index={idx}
                todo={todo}
              />
            );
          })}
      </section>
    </main>
  );
};

export default MovieWishlist;
