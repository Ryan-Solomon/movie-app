import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Error Component', () => {
  test('renders to page', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
  test('Shows error component', () => {
    renderWithRouter(<App />, { route: '/something-that-does-not-match' });
    expect(screen.getByText(/head back home/i)).toBeInTheDocument();
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/head back home/i), leftClick);

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
