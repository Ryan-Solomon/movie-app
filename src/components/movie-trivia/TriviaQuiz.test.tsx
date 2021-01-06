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
  });
  test('click next button to show next question', async () => {
    render(
      <TrivaQuiz difficulty={difficulty} setDifficulty={setDifficulty} />,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(await screen.findByText(/question: 1/i)).toBeInTheDocument();
    const nextButton = screen.getByRole(/button/);
    userEvent.click(nextButton);
    expect(await screen.findByText(/question: 2/i)).toBeInTheDocument();
  });
  test('click option and show correct/false', async () => {
    render(
      <TrivaQuiz difficulty={difficulty} setDifficulty={setDifficulty} />,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(await screen.findByText(/question: 1/i)).toBeInTheDocument();
    const optionDivs = screen.getAllByTestId('quiz-option');
    expect(optionDivs[0]).toBeInTheDocument();
    userEvent.click(optionDivs[0]);

    const corretOrIncorrect = await screen.findAllByText(
      /(correct|incorrect)/i
    );
    expect(corretOrIncorrect[0]).toBeInTheDocument();
  });
});
