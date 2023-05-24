import { render, screen } from '@testing-library/react';
// import App from './App';
import Header from './components/Header';
import { LoginPage } from './pages/LoginPage';

// HEADER TEST
test('as a use i would like to know if the text is in the header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Bookster/i);
  expect(linkElement).toBeInTheDocument();
});



test('as user i would like to be able to press button "sign in.."', () => {
  render(<LoginPage />);
  const button = screen.getByRole('button', { name: 'Sign in' });
  expect(button).toBeInTheDocument();
});

test('as use I would like know if there is a link with name "here', () => {
  render(<LoginPage />);
  const button = screen.getByRole('link', { name: 'here!' });
  expect(button).toBeInTheDocument();
});


