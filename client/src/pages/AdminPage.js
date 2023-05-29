import { UserPage } from "./UserPage";
import { Outlet, Link, useNavigate } from "react-router-dom";
import FilterUsers from "../components/admin/FilterUsers";
import FilterBooks from "../components/admin/FilterBooks";
import '../style/Admin.css';

export const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="filter-btn-container">
          <button className="filter-btns" onClick={() => {navigate('/admin/books')}}>Books</button>
          <button className="filter-btns" onClick={() => {navigate('/admin/users')}}>Users</button>
      <Outlet/>
    </div>
  )
}