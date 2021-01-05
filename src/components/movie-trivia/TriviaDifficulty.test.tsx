import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import TriviaDifficulty from './TriviaDifficulty';

const setDifficulty = (s: 'easy' | 'medium' | 'hard' | null) => null;

describe('Upcoming Movie Item Component', () => {
  test('renders to page', () => {
    render(<TriviaDifficulty setDifficulty={setDifficulty} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText(/choose your difficulty/i)).toBeInTheDocument();
  });
});
