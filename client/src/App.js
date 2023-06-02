import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import { GuestPage } from "./pages/GuestPage";
import { UserPage } from "./pages/UserPage";
import "./style/Main.css";
import { AdminPage } from "./pages/AdminPage";
import FilterBooks from "./components/admin/FilterBooks";
import FilterUsers from "./components/admin/FilterUsers";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route Route path="/admin" element={<AdminPage />}>
            <Route path="books" element={<FilterBooks />} />
            <Route path="users" element={<FilterUsers />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
