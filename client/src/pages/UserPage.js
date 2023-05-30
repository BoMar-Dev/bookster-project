import React from "react";
import getJwtInfo from '../utils/getJwtInfo';
import { useState, useEffect } from "react";
import PageNavigation from "../components/PageNavigation";


export const UserPage = () => {
  const API_URL = 'http://localhost:4000/library/books';
  const [books, setBooks] = useState([]);
 
  PageNavigation();

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
    <>
    <div className='user-container'>
        <section>
        <h2>Book title</h2>
        <h2>Book author</h2>
        <h2>Availability</h2>
        <h2>Order</h2>
      </section>
      <ul>
        <li key={books}> {books.map((book) => {
            const {title, author, quantity} = book; 
            return (
              <div>
                <p>{title}</p>
                <p>{author}</p>
                <p>{quantity}</p>
                <div className="order-section">
                  <div className="order-add-remove-btn">
                    <button> - </button>
                    <span> 0 </span>
                    <button> + </button>
                  </div>
                  <button>Order</button>
                </div>
              </div>
            )
          })}
        </li>
      </ul>
    </div>
    </>
  )
}
