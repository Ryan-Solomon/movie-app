import React from 'react';
import { render, screen } from '@testing-library/react';

import Welcome from './Welcome';

describe('Welcome component', () => {
  test('renders Welcome component to the page', () => {
    render(<Welcome />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
