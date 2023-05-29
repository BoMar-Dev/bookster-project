import { useState, useEffect } from 'react';
import React from 'react'
import { SearchField } from '../components/SearchField';
import { signOutBtn } from '../components/SignInAndOutButton';


export const GuestPage = () => {

  const API_URL = 'http://localhost:4000/library/books';

const [books, setBooks] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const books = await response.json()
            console.log(books);
            setBooks(books);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
    
}, []);



  return (
    <div className='guest-container'>
      < SearchField />
      {/* {signOutBtn()} */}
        <section >
          <h2>Book title</h2> 
          {books.map((bookTitle) => {
            const {title} = bookTitle; 
            return (<p>{title}</p>)
          })}
        </section>
        <section>
          <h2>Book author</h2>
          {books.map((bookAuthor) => {
            const {author} = bookAuthor; 
            return (<p>{author}</p>)
          })}
        </section>
        <section>
          <h2>Availability</h2>
          {books.map((bookQuantity) => {
            const {quantity} = bookQuantity; 
            return (<p>{quantity}</p>)
          })}
        </section>
    </div>
  )
}
