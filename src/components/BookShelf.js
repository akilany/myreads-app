import React from "react";
import PropTypes from "prop-types";
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

BookShelf.propTypes = {
  bookShelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
};

export default BookShelf;
