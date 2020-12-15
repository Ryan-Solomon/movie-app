import React from 'react';
import { render, screen } from '@testing-library/react';
import UpcomingMovieSearch from './UpcomingMovieSearch';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Upcoming Movie Search Component', () => {
  test('renders to page', () => {
    render(<UpcomingMovieSearch />, { wrapper: MemoryRouter });

    expect(screen.getByText(/movies/i)).toBeInTheDocument();
  });

  test('next page button', () => {
    const { debug, getByText } = render(<UpcomingMovieSearch />, {
      wrapper: MemoryRouter,
    });
    const nextPage = screen.getByText(/next page/i);
    const pageText = screen.getByText(/current page: 1/i);

    expect(pageText).toBeInTheDocument();
    expect(nextPage).toBeInTheDocument();

    userEvent.click(nextPage);
    expect(pageText).toHaveTextContent(/current page: 2/i);

    debug();
  });
});
