// import { useEffect, useState } from "react";


// const FetchApi = () => {
//     const API_URL = 'http://localhost:4000/library/books';
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(API_URL);
//                 const books = await response.json()
//                 console.log(books);
//                 setBooks(books);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchData();
        
//       }, []);
    
// }
// export default FetchApi