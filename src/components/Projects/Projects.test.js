import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('home text on screen', () => {
  render(<Projects />);
  const text = screen.getByText(/projects component/i);
  expect(text).toBeInTheDocument();
});
