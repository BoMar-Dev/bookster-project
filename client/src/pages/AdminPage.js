import { UserPage } from "./UserPage";
import { Outlet, Link, useNavigate } from "react-router-dom";
import FilterUsers from "../components/admin/FilterUsers";
import FilterBooks from "../components/admin/FilterBooks";
import '../style/Admin.css';
import Header from "../components/Header";
import isAdmin from '../utils/isAdmin';
import getJwtInfo from '../utils/getJwtInfo';
import { useEffect } from "react";
import PageNavigation from "../components/PageNavigation";
import '../style/Main.css';

export const AdminPage = () => {
  const navigate = useNavigate();

  
  PageNavigation();

  return (
    <>
    <div className="filter-btn-container">
          <button className="filter-btns" onClick={() => {navigate('/admin/books')}} >Books</button>
          <button className="filter-btns" onClick={() => {navigate('/admin/users')}}>Users</button>
    </div>
    {/* <FilterBooks /> */}
    <Outlet/>
    </>
  )
}