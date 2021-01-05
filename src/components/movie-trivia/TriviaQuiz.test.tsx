import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import TrivaQuiz from './TriviaQuiz';
import userEvent from '@testing-library/user-event';

const setDifficulty = jest.fn();
const difficulty: 'easy' | 'medium' | 'hard' | null = 'easy';

describe('Upcoming Movie Item Component', () => {
  test('renders to page', () => {
    render(
      <TrivaQuiz difficulty={difficulty} setDifficulty={setDifficulty} />,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
  test('renders to page', async () => {
    render(
      <TrivaQuiz difficulty={difficulty} setDifficulty={setDifficulty} />,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(await screen.findByText(/question: /i)).toBeInTheDocument();
    // screen.debug();
  });
});
