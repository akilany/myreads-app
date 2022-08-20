import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

const Search = () => {
  const [query, setQuery] = useState("");
  const [myBooks, setMyBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getMyBooks = async () => {
      const response = await BooksAPI.getAll();
      setMyBooks(response);
    };

    getMyBooks();
  }, []);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await BooksAPI.search(query, 15);
        setBooks(
          response.map((book) => myBooks.find((b) => book.id === b.id) || book)
        );
      } catch (err) {
        console.log(err);
      }
    };

    const timeoutID = setTimeout(() => {
      if (query) getBooks();
      else setBooks([]);
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [query]);

  const handleShelfChange = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {!!books.length
            ? books.map((book) => (
                <li key={book.id}>
                  <Book book={book} onChangeShelf={handleShelfChange} />
                </li>
              ))
            : "Please enter a valid query"}
        </ol>
      </div>
    </div>
  );
};

export default Search;
