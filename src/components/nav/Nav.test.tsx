import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Nav Component', () => {
  test('renders to page', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText(/movie/i)).toBeInTheDocument();
  });
});
