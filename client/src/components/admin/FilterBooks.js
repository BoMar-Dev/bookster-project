import React from "react";
import { useState, useEffect } from "react";
import fetchApi from "../../data/FetchApi";
import EditBook from "./EditBook";
// import '../style/Main.css';
import '../../style/Main.css';
import { SearchField } from "../SearchField";


const FilterBooks = () => {
  const API_URL = 'http://localhost:4000/library/books';
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);


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

  useEffect(() => {

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


  const increaseCount = (title) => {
    setBooks(books.map(book => {
      if(book.title === title){
        if(book.count === undefined){
          book.count = 0;
        }
        book.count += 1
        console.log(count);

      }
      return book;
    }))
  };


 const orderAndReset = (title) => {
  setIsLoading(false)
  console.log(title)
  setBooks(books.map(async book => {
     if(book.title === title){
      const quantity = book.count;
      const response = await fetchApi("http://localhost:4000/library/user/books","POST", {title, quantity})
      // console.log(await response.json())
      if(response.status < 400){
        const data = await response.json();
        console.log(data)
        setBooks(data.context.books)
      }else{
        console.log(await response.text());
      }
      setIsLoading(true)
    }
  }))
};

const deleteBook = (title) => {
  setIsLoading(false)
  setBooks(books.map(async book => {
    if(book.title === title){
      const quantity = book.count;
      const response = await fetchApi("http://localhost:4000/admin/books", "DELETE", {title ,quantity})
      // console.log(await response.json())
    if (response.status < 400) {
        const data = await response.json();
        console.log(data);
        setBooks(data.context.books)
      } else {
        console.log(await response.text());
      }
      setIsLoading(true)
    }
  }))
};

  
const editBooks = (title, author, quantity)=>{
  console.log("funkar dwet eller?");
  setShowModal(true)
  setIsLoading(false)

  setBooks(books.map(async book => {
    if(book.title === title){
      const previous = book.title
      const info1 = title
      const info2 = author
      const info3 = quantity
      const current = [info1, info2, info3]
      const response = await fetchApi("http://localhost:4000/admin/books", "PUT", {previous ,current})
      // console.log(await response.json())
    if (response.status < 400) {
        const data = await response.json();
        console.log(data);
        setBooks(data.context.books)
      } else {
        console.log(await response.text());
      }
      setIsLoading(true)
    }
  }))
  
}


  
  return (
    <div className="admin-books-container">
      <div className="search-add-wrapper">
        <SearchField />
        <button className="add-book">Add new Books</button>
      </div>
      <section className="title-section">
        <h2>Book title</h2>
        <h2>Book author</h2>
        <h2>Availability</h2>
        <h2>Order</h2>
        <h2>Action</h2>
      </section>
      {isLoading ?
      <ul>
        <li key={books}> {books.map((book) => {
            return (
              <div className="book-info-container">
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.quantity}</p>
                <div className="order-section">
                  <div className="order-add-remove-btn">
                  <button onClick={() => decreaseCount(book.title)}> - </button>
                   <span> {book.count || 0} </span>
                   <button onClick={() => increaseCount(book.title)}> + </button>
                  </div>
                  <button onClick={() => orderAndReset(book.title)}className="order-btn">Order</button>
                </div>
                <div className="action-section">
                  <button onClick={() => editBooks()} className="edit-btn">Edit</button>
                  <button onClick={() => deleteBook(book.title)} className="delete-btn">Delete</button>
                </div>
              </div>
            )
          })}
        </li>
      </ul> : <p>loading</p>}

     {/* Pop up for change Book */}
      {showModal && (
       <div className="popup-window">
        <EditBook />
        <button onClick={() => setShowModal(false)}>
          Close Pop-up
        </button>
       </div>
      )}
    </div>
  )
}

export default FilterBooks