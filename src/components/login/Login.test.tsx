import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { Login } from './Login';

describe('Login Component', () => {
  test('renders to page', () => {
    render(<Login />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
