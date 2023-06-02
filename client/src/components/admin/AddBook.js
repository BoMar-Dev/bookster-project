import { useState, useEffect } from "react";
import fetchApi from "../../data/FetchApi";
import "../../style/Main.css";
import "../../style/Admin.css";

export default function AddBook({ setBooks }) {
  async function submitBook(e) {
    e.preventDefault();
    const formValue = new FormData(e.target); //tar in data från formen (pga onSubmit)
    const values = Object.fromEntries(formValue); //  gör det till ett object

    try {
      console.log(values);

      const response = await fetchApi(
        "http://localhost:4000/admin/books",
        "POST",
        values
      );
      console.log(response);
      if (response.status < 400) {
        const data = await response.json();
        setBooks(data.context.books);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="edit-book-container">
      <h2>Add Book</h2>
      <form className="edit-book-form" onSubmit={submitBook}>
        <label>Title </label>
        <input
          name="title"
          type="text"
          placeholder="insert new title"
          // onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Author </label>
        <input
          name="author"
          type="text"
          placeholder="insert new Author"
          // onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label>Quantity </label>

        <input
          name="quantity"
          type="text"
          placeholder="insert new Quantity"
          // onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <button type="submit">Save Changes</button>
        <button>Discard Changes</button>
      </form>
    </div>
  );
}

// TITLE - ERAGON
// jag väljer namnet olle
// AUTHOR - Christopher Paolini
// trötter
// QUANTITY - 3
// 5000
