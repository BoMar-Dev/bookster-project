import React from 'react'
import { SearchField } from '../SearchField'

const FilterUsers = () => {
  return (
    <div className="admin-users-container">
      <div>
        <input type="text" placeholder="Search by user..."></input>
      </div>
      <section>
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
        </section>
        
    </div>
  )
}

export default FilterUsers