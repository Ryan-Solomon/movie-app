import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import DadJokes from './DadJokes';
import userEvent from '@testing-library/user-event';

describe('Dad Jokes Component', () => {
  test('renders to page', () => {
    render(<DadJokes />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getByText(/generate a dad joke/i)).toBeInTheDocument();
  });
});
