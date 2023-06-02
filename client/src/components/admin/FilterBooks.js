/*
Admin permission only.
fetching and render the list of books from the API.
increase and decrease the value of count, placing the order, and reseting the count value.
deleting a book from the list and update the new list
edit and add new books handlers for navigation to another component.
*/

import React from "react";
import { useState, useEffect } from "react";
import fetchApi from "../../data/FetchApi";
import EditBook from "./EditBook";
import "../../style/Main.css";
import { SearchField } from "../SearchField";
import AddBook from "./AddBook";

const FilterBooks = () => {
  const API_URL = "http://localhost:4000/library/books";
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showAddBook, setShowAddBook] = useState(false);
  const [savedBook, setSavedBook] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const books = await response.json();
      console.log(books.books);
      setBooks(books.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [showModal, showAddBook]); // varje gång ett nytt värde tilldelas till books så uppdateras det.

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
            setBooks(data.context.books);
          } else {
            console.log(await response.text());
          }
          setIsLoading(true);
        }
      })
    );
  };

  const deleteBook = (title) => {
    console.log(title);
    console.log();
    setIsLoading(false);
    setBooks(
      books.map(async (book) => {
        if (book.title === title) {
          const quantity = book.count;
          const response = await fetchApi(
            "http://localhost:4000/admin/books",
            "DELETE",
            { title, quantity }
          );
          // console.log(await response.json())
          if (response.status < 400) {
            const data = await response.json();
            console.log(data);
            setBooks(data.context.ctx.books);
          } else {
            console.log(await response.text());
          }
          setIsLoading(true);
        }
      })
    );
  };

  const handleEdit = async (book) => {
    setShowModal(true);
    setIsLoading(false);
  };

  const handleAdd = async (book) => {
    setShowAddBook(true);
    setIsLoading(false);
  };

  return (
    <div className="admin-books-container">
      <div
        onClick={() => handleAdd(setSavedBook(books))}
        className="search-add-wrapper">
        <SearchField setbooks={setBooks} />
        <button className="add-book">Add new Books</button>
      </div>
      <section className="title-section">
        <h2>Book title</h2>
        <h2>Book author</h2>
        <h2>Availability</h2>
        <h2>Order</h2>
        <h2>Action</h2>
      </section>
      {isLoading && (
        <ul>
          <li key={books}>
            {" "}
            {books.map((book) => {
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
                      onClick={() => orderAndReset(book.title)}
                      className="order-btn">
                      Order
                    </button>
                  </div>
                  <div className="action-section">
                    <button
                      onClick={() => handleEdit(setSavedBook(book))}
                      className="edit-btn">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBook(book.title)}
                      className="delete-btn">
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </li>
        </ul>
      )}

      {/* Pop up for change Book */}
      {showModal && (
        <div className="popup-window">
          <EditBook book={savedBook} />
          <button
            onClick={() => {
              setShowModal(false);
              setIsLoading(true);
            }}
            className="close-btn">
            Close Pop-up
          </button>
        </div>
      )}
      {showAddBook && (
        <div className="popup-window">
          <AddBook book={savedBook} />
          <button
            onClick={() => {
              setShowAddBook(false);
              setIsLoading(true);
            }}
            className="close-btn">
            Close Pop-up
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBooks;
