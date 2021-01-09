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
  test('clicking generate dad joke, calls on click', () => {
    render(<DadJokes />, {
      wrapper: MemoryRouter,
    });
    const fn = jest.fn();
    const generateJokeBtn = screen.getByRole(/button/, {
      name: /generate a dad joke/i,
    });
    generateJokeBtn.onclick = fn;
    userEvent.click(generateJokeBtn);
    expect(fn).toBeCalledTimes(1);
  });
});
