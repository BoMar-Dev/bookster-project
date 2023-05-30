import React from 'react'
import { SearchField } from '../SearchField'
import { useState, useEffect } from 'react';

const FilterUsers = () => {
    const API_URL = 'http://localhost:4000/admin/users';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const dataUsers = await response.json()
                console.log(dataUsers);
                setUsers(dataUsers);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        
      }, []);

  return (
    
    <div className="admin-users-container">
      <div>
        <input type="text" placeholder="Search by user..."></input>
      </div>
      <section>
        <h2>Username</h2>
        <h2>Role</h2>
        <h2>Purchases</h2>
        <h2>Action</h2>
      </section>
      <ul>
        <li key={users}>
        {users.map((renderUser)=>{
            const{username, role} = renderUser

            return(
                <div>
                     <p>{username}</p>
                     <p>{role}</p>
                </div>
            )
        })}
        </li>
      </ul>
    

      {/* <section>
            <h2>Username</h2>
            <div>
                <p>mappa igenom users</p>
            </div>
        </section>
        <section>
            <h2>Role</h2>
            <div>
                <p>USER</p>
            </div>
        </section>
        <section>
            <h2>Purchases</h2>
            <div>
                <p>3 purchases</p>
            </div>
        </section>
        <section>
            <h2>Action</h2>
            <div>
                <button>Promote</button>
                <button>Delete</button>
            </div>
        </section> */}
        
    </div>
  )
}

export default FilterUsers