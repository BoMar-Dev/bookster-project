/*
Admin permission only.
Updating information about a book (title, author and quantity).
Previous state of books is connected to "book" and the updated version is connected to "values".
*/

import fetchApi from "../../data/FetchApi";
import "../../style/Main.css";
import "../../style/Admin.css";

export default function EditBook({ book }) {
  async function submitBook(e) {
    e.preventDefault();
    const formValue = new FormData(e.target); //tar in data från formen (pga onSubmit)
    const values = Object.fromEntries(formValue); //  gör det till ett object

    try {
      console.log(values);

      const response = await fetchApi(
        "http://localhost:4000/admin/books",
        "PUT",
        { previous: book, current: values }
      );
      console.log(response);
      if (response.status < 400) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="edit-book-container">
      <h2 className="edit-text">Edit Book</h2>
      <form className="edit-book-form" onSubmit={submitBook}>
        <label>Title - {book.title}</label>
        <input
          name="title"
          type="text"
          placeholder="insert new title"
          // onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Author - {book.author}</label>
        <input
          name="author"
          type="text"
          placeholder="insert new Author"
          // onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label>Quantity - {book.quantity}</label>

        <input
          name="quantity"
          type="text"
          placeholder="insert new Quantity"
          // onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <button type="submit" className="save-changes-btn">
          Save Changes
        </button>
        {/* <button>Discard Changes</button> */}
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
