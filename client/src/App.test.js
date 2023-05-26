import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import { LoginPage } from './pages/LoginPage';
// import axios from 'axios';

// HEADER TEST
test('as a use i would like to know if the text is in the header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Bookster/i);
  expect(linkElement).toBeInTheDocument();
});


// Button sign in test
test('as user i would like to be able to press button "sign in.."', () => {
  render(<LoginPage />);
  const button = screen.getByRole('button', { name: 'Sign in' });
  expect(button).toBeInTheDocument();
});


// Register page
test('as use I would like know if there is a link with name "here', () => {
  render(<LoginPage />);
  const button = screen.getByRole('link', { name: 'here!' });
  expect(button).toBeInTheDocument();
});


// Input Field Test 

// test('as a user i would like to be able to type my username in the input field', () => {
//   render(<App />);
//   const result = (3+8)
//   expect(result).toBe(11)
// });



// If inputfields = "" = Button = disablet
//If inputfields = value = button = anable