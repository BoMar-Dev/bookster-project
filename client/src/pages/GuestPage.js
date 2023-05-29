import { useState, useEffect } from 'react';
import React from 'react'
import { SearchField } from '../components/SearchField';
import { useNavigate } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';

export const GuestPage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const API_URL = 'http://localhost:4000/library/books';
  
  
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

  PageNavigation();


  return (
    <div className='guest-container'>
      < SearchField />
        <section >
          <h2>Book title</h2>
          {books.map((bookTitle, bookAuthor) => {
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
