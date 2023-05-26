import { render, screen, fireEvent, } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from './App';
import Header from './components/Header';
import  LoginPage  from './pages/LoginPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import axios from 'axios';


// Button sign in test
test('as user i would like to be able to see a button "sign in.."', () => {
  render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/> } />
    </Routes>
  </BrowserRouter>);
  const button = screen.getByRole('button', { name: 'Sign in' });
  expect(button).toBeInTheDocument();
});

// characters needed in input fields
test('As a user i would like to enter at least 3 characters in both username, and password.', () => {
  render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/> } />
    </Routes>
  </BrowserRouter>);
const passwordInputElement = screen.getByPlaceholderText(/password/i);
expect(passwordInputElement.value).toBe("")
});



test('FUCK OFF', () => {
  render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/> } />
    </Routes>
  </BrowserRouter>);

expect(screen.getByTestId('submitBtn')).toBeDisabled();

const input = screen.getByTestId('usernameInput');
fireEvent.change(input, {target: {value: 'matti'}});

expect(screen.getByTestId('submitBtn')).toBeEnabled();
});




// Button sign in test
test('Math', () => {
  render(<BrowserRouter><Routes><Route path='/' element={<LoginPage/>}/></Routes></BrowserRouter>);
  const numbers  = (3+5)
  expect(numbers).toBe(8);
});








// If inputfields = "" = Button = disablet
//If inputfields = value = button = anable