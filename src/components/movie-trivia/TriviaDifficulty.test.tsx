import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import TriviaDifficulty from './TriviaDifficulty';
import userEvent from '@testing-library/user-event';

const setDifficulty = jest.fn();

describe('Upcoming Movie Item Component', () => {
  test('renders to page', () => {
    render(<TriviaDifficulty setDifficulty={setDifficulty} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText(/choose your difficulty/i)).toBeInTheDocument();
  });
  test('call set difficulty on click', async () => {
    render(<TriviaDifficulty setDifficulty={setDifficulty} />, {
      wrapper: MemoryRouter,
    });
    const diffCard = screen.getByTestId('diff-card');
    diffCard.onclick = setDifficulty;
    userEvent.click(diffCard);
    expect(setDifficulty).toBeCalledTimes(1);
  });
});
