import React from 'react';
import { render, screen } from '@testing-library/react';
import UpcomingMovieSearch from './UpcomingMovieSearch';
import { MemoryRouter } from 'react-router-dom';

// Fix can't read propery location of undefined

describe('Upcoming Movie Search Component', () => {
  test('renders to page', () => {
    render(<UpcomingMovieSearch />, { wrapper: MemoryRouter });

    expect(screen.getByText(/movies/i)).toBeInTheDocument();
  });
});
