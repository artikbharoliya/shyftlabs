import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world on home page', () => {
  render(<App />);
  const heading = screen.getByText(/Hello World!/i);
  expect(heading).toBeInTheDocument();
});


// TODO: unit tests for students page, courses page and results page