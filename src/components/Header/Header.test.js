import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('home text on screen', () => {
  render(<Header />);
  const text = screen.getByText(/about/i);
  expect(text).toBeInTheDocument();
});
