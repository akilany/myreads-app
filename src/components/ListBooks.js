import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import BookShelf from "./BookShelf";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setBooks(response);
    };

    getBooks();
  }, []);

  const handleShelfChange = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    setBooks(books.map((b) => (b.id === book.id ? { ...b, shelf } : b)));
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            bookShelfTitle="Currently Reading"
            books={books.filter((book) => book.shelf === "currentlyReading")}
            handleShelfChange={handleShelfChange}
          />
          <BookShelf
            bookShelfTitle="Want to Read"
            books={books.filter((book) => book.shelf === "wantToRead")}
            handleShelfChange={handleShelfChange}
          />
          <BookShelf
            bookShelfTitle="Read"
            books={books.filter((book) => book.shelf === "read")}
            handleShelfChange={handleShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
