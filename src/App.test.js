import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/A new website is coming soon.../i);
  expect(paragraphElement).toBeInTheDocument();
});
