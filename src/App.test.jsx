import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import data from './static/data.json';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(data.name);
  expect(linkElement).toBeInTheDocument();
});
