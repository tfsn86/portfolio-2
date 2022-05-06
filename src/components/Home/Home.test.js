import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('home text on screen', () => {
  render(<Home />);
  const text = screen.getByText(/home component/i);
  expect(text).toBeInTheDocument();
});
