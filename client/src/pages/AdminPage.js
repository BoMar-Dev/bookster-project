/* 
Admin permission only.
two byuttons to navigate to books and users
*/

import { Outlet, Link, useNavigate } from "react-router-dom";
import "../style/Admin.css";
import PageNavigation from "../components/PageNavigation";
import "../style/Main.css";

export const AdminPage = () => {
  const navigate = useNavigate();

  PageNavigation();

  return (
    <>
      <div className="filter-btn-container">
        <button
          className="filter-btns"
          onClick={() => {
            navigate("/admin/books");
          }}>
          Books
        </button>
        <button
          className="filter-btns"
          onClick={() => {
            navigate("/admin/users");
          }}>
          Users
        </button>
      </div>
      {/* <FilterBooks /> */}
      <Outlet />
    </>
  );
};
