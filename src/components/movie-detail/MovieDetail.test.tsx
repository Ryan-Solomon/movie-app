import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import MovieDetail from './MovieDetail';

describe('Movie Detail Component', () => {
  test('renders to page after loading', async () => {
    render(<MovieDetail />, { wrapper: MemoryRouter });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/hover/i)).toBeInTheDocument();
  });
});
