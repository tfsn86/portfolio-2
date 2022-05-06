import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

test('home text on screen', () => {
  render(<Skills />);
  const text = screen.getByText(/skills component/i);
  expect(text).toBeInTheDocument();
});
