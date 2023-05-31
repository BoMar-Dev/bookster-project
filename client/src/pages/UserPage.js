import React from "react";
import getJwtInfo from '../utils/getJwtInfo';
import { useState, useEffect } from "react";
import PageNavigation from "../components/PageNavigation";
// import Order from "../components/Order";


export const UserPage = () => {
  const API_URL = 'http://localhost:4000/library/books';
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
 
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


  const decreaseCount = (title) => {
    setBooks(books.map(book => {
      if(book.title === title){
        if(book.count === undefined){
          book.count = 0;
        }
        book.count -= 1
      }
      return book;
    }))
  }

  //Jakob brukar skriva : books.count = book.count === undefined ? 0 : book.count;

  const increaseCount = (title) => {
    setBooks(books.map(book => {
      if(book.title === title){
        if(book.count === undefined){
          book.count = 0;
        }
        book.count += 1
      }
      return book;
    }))
  }

  

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
                  <button onClick={() => decreaseCount(title)}> - </button>
                    <span> {book.count || 0} </span>
                    {/* <button onClick={increase}> + </button> */}
                    <button onClick={() => increaseCount(title)}> + </button>
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
