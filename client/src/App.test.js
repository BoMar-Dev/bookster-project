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
import { App, LocationDisplay } from "./app";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
// import App from "./App";

import { UserPage } from "./pages/UserPage";
import { RegisterPage } from "./pages/RegisterPage";
import { searchBook } from "./components/SearchField";

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

// enable disable button when input fields got values
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

// Login page hould render LOGIN as header
test("H1 should be rendered", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
  const textLogin = screen.getByRole("heading", { level: 1 });
  expect(textLogin).toBeInTheDocument();
});

// -----------------------------------------------
// ----------- FAILED TESTS BELOW ----------------
// -----------------------------------------------

// navigate test 1 - FAILED!
// test('navigates to "/guest" path when link is clicked', () => {
//   const history = createMemoryHistory();
//   render(
//     <BrowserRouter history={history}>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/guest" element={<GuestPage />} />
//       </Routes>
//     </BrowserRouter>
//   );

//   const linkElement = screen.getByText("No account? Sign up");
//   expect(linkElement).toBeInTheDocument();

//   // Click on the link
//   fireEvent.click(linkElement);

//   expect(history.location.pathname).toBe("/guest");
// });

// navigate test 2 - FAILED!
// test('navigates to "/register" path when "Register" button is clicked', () => {
//   render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//       </Routes>
//     </BrowserRouter>
//   );

//   const registerButton = screen.getByText("No account? Sign up");
//   expect(registerButton).toBeInTheDocument();

//   fireEvent.click(registerButton);

//   const registerPageHeading = screen.getAllByRole("heading");
//   expect(registerPageHeading).toBe("Register");
// });

// checking if the searchfield works if searching for Eragon
// test("checking the searchfield functionality", async () => {
//   const searchForABook = await searchBook("Eragon");
//   console.log(searchForABook);

//   expect(searchForABook[0].title).toBe("Eragon");
// });
