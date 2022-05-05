import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('home text on screen', () => {
  render(<NotFound />);
  const text = screen.getByText(/NotFound component/i);
  expect(text).toBeInTheDocument();
});
