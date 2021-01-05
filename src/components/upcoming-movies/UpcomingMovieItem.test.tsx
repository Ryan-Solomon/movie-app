import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import UpcomingMovieItem from './UpcomingMovieItem';
import { UpcomingMovie } from './upcomingMovieReducer';
import { createMemoryHistory } from 'history';

import userEvent from '@testing-library/user-event';

const mockMovie: UpcomingMovie = {
  poster_path: '123',
  overview: 'this is a movie',
  release_date: 'January 2020',
  id: 1,
  title: 'The Movie',
};

describe('Upcoming Movie Item Component', () => {
  test('renders to page', () => {
    render(<UpcomingMovieItem movie={mockMovie} />, { wrapper: MemoryRouter });

    expect(screen.getByText(/click/i)).toBeInTheDocument();
  });

  test('renders appropriate data based on movie', () => {
    render(<UpcomingMovieItem movie={mockMovie} />, { wrapper: MemoryRouter });

    expect(screen.getByText(/the movie/i)).toBeInTheDocument();
    expect(screen.getByText(/january 2020/i)).toBeInTheDocument();
  });
  test('renders appropriate data based on movie', () => {
    render(<UpcomingMovieItem movie={mockMovie} />, { wrapper: MemoryRouter });

    expect(screen.getByText(/the movie/i)).toBeInTheDocument();
    expect(screen.getByText(/january 2020/i)).toBeInTheDocument();
  });
});
