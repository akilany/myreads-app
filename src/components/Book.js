import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Book = ({ book, onChangeShelf }) => {
  const changeShelf = (e) => {
    if (onChangeShelf) onChangeShelf(book, e.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <Link to={`/book/${book.id}`}>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
        </Link>
        <div className="book-shelf-changer">
          <select
            onChange={changeShelf}
            defaultValue={!!book.shelf ? book.shelf : "none"}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <Link to={`/book/${book.id}`}>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
