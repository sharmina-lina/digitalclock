import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const clockElement = screen.getByRole('heading');
  expect(clockElement).toBeInTheDocument();
});
