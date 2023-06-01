import FilterBooks from "./FilterBooks";
import { useState } from "react";
import '../../style/Main.css';
import '../../style/Admin.css';

const EditBook = ({hoho}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');




  

  return (
    <div>
        <h2>Edit Book</h2>
        <form onSubmit={FilterBooks.editBooks}>
            <label>Title - CURRENT {}</label>
            <input 
            type="text" 
            placeholder="insert new title" 
            onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>Author - CURRENT author</label>
            <input 
            type="text" 
            placeholder="insert new Author"
            onChange={(e) => setAuthor(e.target.value)}
            ></input>
            <label>Quantity - CURRENT Quantity</label>
            <input 
            type="text" 
            placeholder="insert new Quantity"
            onChange={(e) => setQuantity(e.target.value)}
            ></input>
            <button type="submit">Save Changes</button>
            <button>Discard Changes</button>
        </form>
    </div>
  )
}
export default EditBook




// TITLE - ERAGON
// jag väljer namnet olle
// AUTHOR - Christopher Paolini
// trötter
// QUANTITY - 3
// 5000