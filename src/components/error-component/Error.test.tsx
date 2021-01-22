import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ErrorComponent from './Error';

describe('Error Component', () => {
  test('renders to page', () => {
    render(<ErrorComponent />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getByText(/head back home/i)).toBeInTheDocument();
  });
});
