import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home component text', () => {
  render(<App />);
  const homeCompText = screen.getByText(/business analyst/i);
  expect(homeCompText).toBeInTheDocument();
});
