/* 
user permission.
fetching and render the list of books from the API.
increase and decrease the value of count, placing the order, and reseting the count value.
*/

import React from "react";
import { useState, useEffect } from "react";
import PageNavigation from "../components/PageNavigation";
import fetchApi from "../data/FetchApi";
import "../style/Main.css";

export const UserPage = () => {
  const API_URL = "http://localhost:4000/library/books";
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  PageNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const books = await response.json();
        console.log(books);
        setBooks(books.books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const decreaseCount = (title) => {
    setBooks(
      books.map((book) => {
        if (book.title === title) {
          if (book.count === undefined) {
            book.count = 0;
          }
          book.count -= 1;
        }
        return book;
      })
    );
  };

  const increaseCount = (title) => {
    setBooks(
      books.map((book) => {
        if (book.title === title) {
          if (book.count === undefined) {
            book.count = 0;
          }
          book.count += 1;
          console.log(count);
        }
        return book;
      })
    );
  };

  const orderAndReset = (title) => {
    setIsLoading(false);
    console.log(title);
    setBooks(
      books.map(async (book) => {
        if (book.title === title) {
          const quantity = book.count;
          const response = await fetchApi(
            "http://localhost:4000/library/user/books",
            "POST",
            { title, quantity }
          );
          // console.log(await response.json())
          if (response.status < 400) {
            const data = await response.json();
            console.log(data);
            setBooks(data.context.books);
          } else {
            console.log(await response.text());
          }
          setIsLoading(true);
        }
      })
    );
  };

  return (
    <>
      <div className="user-container">
        <section className="title-section">
          <h2>Book title</h2>
          <h2>Book author</h2>
          <h2>Availability</h2>
          <h2>Order</h2>
        </section>
        {isLoading ? (
          <ul>
            <li key={books}>
              {" "}
              {books.map((book) => {
                // const {title, author, quantity} = book;
                return (
                  <div className="book-info-container">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.quantity}</p>
                    <div className="order-section">
                      <div className="order-add-remove-btn">
                        <button onClick={() => decreaseCount(book.title)}>
                          {" "}
                          -{" "}
                        </button>
                        <span> {book.count || 0} </span>
                        <button onClick={() => increaseCount(book.title)}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                      <button
                        className="order-btn"
                        onClick={() => orderAndReset(book.title)}>
                        Order
                      </button>
                    </div>
                  </div>
                );
              })}
            </li>
          </ul>
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  );
};
