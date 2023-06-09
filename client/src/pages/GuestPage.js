/* 
guest view.
fetching and render the list of books from the API.
*/

import { useState, useEffect } from "react";
import React from "react";
import { SearchField } from "../components/SearchField";
import PageNavigation from "../components/PageNavigation";
import "../style/Main.css";
import "../style/LoginPage.css";
import { getBooksFromApi } from "../data/TestFetchApi";

export const GuestPage = () => {
  const [books, setBooks] = useState([]);

  const API_URL = "http://localhost:4000/library/books";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getBooksFromApi();
        const response = await fetch(API_URL);
        console.log(response);
        const books = await response.json();
        console.log(books);
        setBooks(books.books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  PageNavigation();

  return (
    <div className="guest-container">
      <SearchField />
      <section className="title-section">
        <h2>Book title</h2>
        <h2>Book author</h2>
        <h2>Availability</h2>
      </section>
      <ul>
        <li key={books}>
          {" "}
          {books.map((book, index) => {
            const { title, author, quantity } = book;
            return (
              <div data-testid={`${title}`} class="book-info-container">
                <p className="book-title">{title}</p>
                <p>{author}</p>
                <p>{quantity}</p>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
