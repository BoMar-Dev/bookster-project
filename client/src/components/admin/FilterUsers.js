import React from 'react'
import { SearchField } from '../SearchField'
import { useState, useEffect } from 'react';
import axios from 'axios';
import getJwtInfo from '../../utils/getJwtInfo';
import isAdmin from '../../utils/getJwtInfo';
import fetchApi from '../../data/FetchApi';

const FilterUsers = () => {
    const API_URL = 'http://localhost:4000/admin/users';
    const [users, setUsers] = useState([]);

    
    async function getUserList(){
      const response = await fetchApi(API_URL, "GET");

      if(response.status < 400){
        setUsers(await response.json());
      }else{
        console.log(await response.text());
      }
    }

    useEffect(() => {
      getUserList();
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
                <div className='filter-users-container'>
                     <p>{username}</p>
                     <p>{role}</p>
                     <p><span>0</span> purchases</p>
                     <div>
                      <button>Promote</button>
                      <button>Delete</button>
                     </div>
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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { SearchField } from '../SearchField';
// import getJwtInfo from '../../utils/getJwtInfo';
// import isAdmin from '../../utils/getJwtInfo';

// const FilterUsers = () => {
//   const API_URL = 'http://localhost:4000/admin/users';
//   const [users, setUsers] = useState([]);

//   async function fetchUsers() {
//     try {
//       const token = sessionStorage.getItem('user');
//       const jwtInfo = getJwtInfo(token);

//       if (isAdmin(jwtInfo)) {
//         const response = await axios.get(API_URL, {
//           headers: {
//             Authorization: jwtInfo.accessToken,
//             'Content-Type': 'application/json'
//           }
//         });

//         setUsers(response.data);
//       } else {
//         console.log('User is not authorized.');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="admin-users-container">
//       <div>
//         <input type="text" placeholder="Search by user..." />
//       </div>
//       <section>
//         <h2>Username</h2>
//         <h2>Role</h2>
//         <h2>Purchases</h2>
//         <h2>Action</h2>
//       </section>
//       <ul>
//         {users.map((renderUser) => {
//           const { username, role } = renderUser;

//           return (
//             <li key={username}>
//               <div>
//                 <p>{username}</p>
//                 <p>{role}</p>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default FilterUsers;