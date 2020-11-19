import React from 'react';
import ReactDom from 'react-dom';
import DadJoke from '../DadJoke';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<DadJoke dadJoke='joke' />, div);
});

it('renders joke correctly', () => {
  const { getByTestId } = render(<DadJoke dadJoke='Joke' />);
  expect(getByTestId('dad-joke')).toHaveTextContent('Joke');
});
