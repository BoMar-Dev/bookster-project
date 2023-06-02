import { useState, useEffect } from "react";
import fetchApi from "../data/FetchApi";

export const SearchField = ({ setbooks }) => {
  const [searchString, setSearchString] = useState("");
  async function searchBook() {
    try {
      const response = await fetchApi(
        `http://localhost:4000/library/books/search?q=${searchString}`,
        "GET"
      );
      if (response.status < 400) {
        const searchList = await response.json();
        setbooks(searchList.books);
        console.log(searchList);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    searchBook();
  }, [searchString]);

  return (
    <div>
      <input
        onChange={(event) => setSearchString(event.target.value)}
        className="search-field"
        type="text"
        placeholder="Search query..."></input>
    </div>
  );
};
