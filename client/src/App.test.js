import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import  LoginPage  from './pages/LoginPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GuestPage from './pages/GuestPage'

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
test('As a user i would like to the input field to be empty.', () => {
  render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/> } />
    </Routes>
  </BrowserRouter>
  );
const passwordInputElement = screen.getByPlaceholderText(/password/i);
expect(passwordInputElement.value).toBe("")
});




// Button sign in test
test('Math', () => {
  render(<BrowserRouter><Routes><Route path='/' element={<LoginPage/>}/></Routes></BrowserRouter>);
  const numbers  = (3+5)
  expect(numbers).toBe(8);
});


  





// If inputfields = "" = Button = disablet
//If inputfields = value = button = anable