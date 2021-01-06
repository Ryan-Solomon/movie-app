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
  test('clicking the add button adds an item to the page', () => {
    render(<MovieWatchList />, { wrapper: MemoryRouter });
    const addBtn = screen.getByRole(/button/i, { name: 'Add' });
    expect(addBtn).toBeInTheDocument();
    expect(screen.queryByRole(/listitem/i)).not.toBeInTheDocument();
    userEvent.click(addBtn);
    expect(screen.queryByRole(/listitem/i)).toBeInTheDocument();
  });
});
