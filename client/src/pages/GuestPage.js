import { useState, useEffect } from 'react';
import React from 'react'
import { SearchField } from '../components/SearchField';
import { useNavigate } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';
import FetchApi from '../API/FetchApi';

export const GuestPage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // FetchApi();

  const API_URL = 'http://localhost:4000/library/books';


  //  function quantityCheck () {
  //  // quanitty fron api
  //  // quantity from api minus 1
  //  // sparas i ny lista
  //  //uppdateras och renderas ut

  // }


  
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
      <section>
        <h2>Book title</h2>
        <h2>Book author</h2>
        <h2>Availability</h2>
      </section>
      <ul>
        <li key={books}> {books.map((book) => {
            const {title, author, quantity} = book; 
            return (
              <div>
                <p>{title}</p>
                <p>{author}</p>
                <p>{quantity}</p>
              </div>
            )
          })}
        </li>
      </ul>
    </div>
  )
}
