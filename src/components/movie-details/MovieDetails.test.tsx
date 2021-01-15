import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import MovieDetails from './MovieDetails';

describe('Movie Details Component', () => {
  test('renders to page after loading', async () => {
    render(<MovieDetails />, { wrapper: MemoryRouter });
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/hover/i)).toBeInTheDocument();
    });
    screen.debug();
  });
});
