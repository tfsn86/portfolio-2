import { render, screen } from '@testing-library/react';
import { About } from './About';

test('home text on screen', () => {
  render(<About />);
  const text = screen.getByText(/about component/i);
  expect(text).toBeInTheDocument();
});
