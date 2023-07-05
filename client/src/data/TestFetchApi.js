/* 
universal fetching function.
*/

export const getBooksFromApi = () => {
  return fetch("http://localhost:4000/library/books").then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};

// REFERENS:
// export const getPokemonsFromApi = () => {
//     return fetch("https://pokeapi.co/api/v2/pokemon").then((resp) => {
//       if (resp.status === 200) return resp.json();
//       else throw new Error("Invalid response");
//     });
//   };
