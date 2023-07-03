import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import LoginPage from "./pages/LoginPage";
import { Route, Routes, BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import GuestPage from "./pages/GuestPage";
import App from "./App";
import { UserPage } from "./pages/UserPage";

// jest.mock("./data/TestFetchApi");

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
test("As a user i would like the input field to be empty.", () => {
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

test("Login button should NOT be disable when input fiels got value", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
  const loginButton = screen.getByTestId("login-btn");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const fakeValue = "hej och hååååååå";

  fireEvent.change(usernameInputEl, { target: { value: fakeValue } });
  fireEvent.change(passwordInputEl, { target: { value: fakeValue } });

  expect(loginButton).not.toBeDisabled();
});
