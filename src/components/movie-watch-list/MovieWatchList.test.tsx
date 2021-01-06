import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import MovieWatchList from './MovieWatchlist';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Movie Watch List', () => {
  test('renders to page', () => {
    render(<MovieWatchList />, { wrapper: MemoryRouter });
    const heading = screen.getByRole(/heading/i);
    expect(heading).toBeInTheDocument();
  });
});
