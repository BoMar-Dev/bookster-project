import React from "react";
import { SearchField } from "../SearchField";
import { useState, useEffect } from "react";
import axios from "axios";
import getJwtInfo from "../../utils/getJwtInfo";
import isAdmin from "../../utils/getJwtInfo";
import fetchApi from "../../data/FetchApi";
import "../../style/Admin.css";
import "../../style/Main.css";

const FilterUsers = () => {
  const API_URL = "http://localhost:4000/admin/users";
  const [users, setUsers] = useState([]);

  async function getUserList() {
    const response = await fetchApi(API_URL, "GET");

    if (response.status < 400) {
      setUsers(await response.json());
    } else {
      console.log(await response.text());
    }
  }

  async function deleteUser(username) {
    try {
      const response = await fetchApi(API_URL, "DELETE", { username });
      const newUsers = await response.json();
      if (response.status < 400) {
        setUsers(newUsers.context.users);
      } else {
        console.log(await response.json());
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function promoteUser(username) {
    try {
      const response = await fetchApi(API_URL, "PUT", { username });
      const newPromotion = await response.json();
      if (response.status < 400) {
        setUsers(newPromotion.context.users);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="admin-users-container">
      <div>
        <input
          className="user-search"
          type="text"
          placeholder="Search by user..."></input>
      </div>
      <section className="title-section">
        <h2>Username</h2>
        <h2>Role</h2>
        <h2>Purchases</h2>
        <h2>Action</h2>
      </section>

      <ul>
        <li key={users}>
          {users.map((renderUser) => {
            const { username, role } = renderUser;

            return (
              <div className="book-info-container">
                <p>{username}</p>
                <p>{role}</p>
                <p>
                  <span>0</span> purchases
                </p>
                <div>
                  <button
                    onClick={() => {
                      promoteUser(username);
                    }}
                    className="promote-btn">
                    Promote
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(username);
                    }}
                    className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default FilterUsers;
