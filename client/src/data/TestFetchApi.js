/* 
universal fetching function.
*/

// export const getBooksFromApi = () => {
//   return fetch("http://localhost:4000/library/books").then((resp) => {
//     if (resp.status === 200) return resp.json();
//     else throw new Error("Invalid response");
//   });
// };

// const API_URL = "http://localhost:4000/library/books";

// export const getBooksFromApi = async () => {
//   const response = await fetch("http://localhost:4000/library/books");
//   console.log(response);
//   const books = await response.json();
//   console.log(books);
//   return books;
// };

// const response = await fetch("http://localhost:4000/library/books");
// console.log(response);
// const books = await response.json();
// console.log(books);
