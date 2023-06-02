import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "./pages/LoginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GuestPage from "./pages/GuestPage";
import App from "./App";

// import axios from 'axios';

// Button sign in test
test('as user i would like to be able to see a button "sign in.."', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
  const button = screen.getByRole("button", { name: "Sign in" });
  expect(button).toBeInTheDocument();
});

// characters needed in input fields
test("As a user i would like to the input field to be empty.", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement.value).toBe("");
});

// Button sign in test
test("Math", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
  const numbers = 3 + 5;
  expect(numbers).toBe(8);
});

// If inputfields = "" = Button = disablet
//If inputfields = value = button = anable

// Button sign in test
// test("logintest", async () => {
//   render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
//   const loginForm = screen.getByTestId("login-form-test");
//   const usernameInput = screen.getByTestId("login-usernamefield");
//   const passwordInput = screen.getByTestId("login-passwordfield");
//   const loginBtn = screen.getByTestId("login-btn");

//   fireEvent.change(usernameInput, { target: { value: "Bob" } });
//   fireEvent.change(passwordInput, { target: { value: "123" } });
//   fireEvent.click(loginBtn);
//   jest.setTimeout(1500);
//   const token = sessionStorage.getItem("user");
//   console.log(token);

//   // expect(usernameInput).toBeInTheDocument();
//   // expect(passwordInput).toBeInTheDocument();
// });
