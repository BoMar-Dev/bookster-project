import React from 'react'
import  SearchField  from '../components/SearchField'

export const GuestPage = () => {
  return (
    <div className='guest-container'>
        < SearchField />
        <section>
            <h2>Book title</h2>
            <p>lorem ipsum</p>
        </section>
        <section>
            <h2>Book author</h2>
            <p>lorem ipsum</p>
        </section>
        <section>
            <h2>Availablity</h2>
            <p>2 left</p>
        </section>
    </div>
  )
}
