import React from "react";
import Book from "./Book";

const BookShelf = ({ bookShelfTitle, books, handleShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                onChangeShelf={(book, shelf) => handleShelfChange(book, shelf)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
