// import React, { useState } from 'react';

// const ActionSection = () => {
//   const [books, setBooks] = useState([]);

//   const decreaseCount = (title) => {
//     setBooks(books.map((book) => {
//       if (book.title === title) {
//         if (book.count === undefined) {
//           book.count = 0;
//         }
//         book.count -= 1;
//       }
//       return book;
//     }));
//   };

//   const increaseCount = (title) => {
//     setBooks(books.map((book) => {
//       if (book.title === title) {
//         if (book.count === undefined) {
//           book.count = 0;
//         }
//         book.count += 1;
//       }
//       return book;
//     }));
//   };

//   const placeOrderAndResetValue = (title) => {
//     setBooks(books.map((book) => {
//       if (book.title === title) {
//         book.count = 0;
//       }
//       return book;
//     }));
//   };

//   return (
//     <ul>
//         <li key={books}> {books.map((book) => {
//             const {title, author, quantity} = book; 
//             return (
//               <div>
//                 <p>{title}</p>
//                 <p>{author}</p>
//                 <p>{quantity}</p>
//                 <div className="order-section">
//                   <div className="order-add-remove-btn">
//                   <button onClick={() => decreaseCount(title)}> - </button>
//                     <span> {book.count || 0} </span>
//                     <button onClick={() => increaseCount(title)}> + </button>
//                   </div>
//                   <button onClick={() => placeOrderAndResetValue(title)}>Order</button>
//                 </div>
//               </div>
//             )
//           })}
//         </li>
//       </ul>
//   )
// }
// export default ActionSection;

        
