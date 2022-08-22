import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const response = await BooksAPI.get(id);
      setBook(response);
    };

    getBook();

    return () => setBook({});
  }, [id]);

  return !!book.imageLinks ? (
    <div className="book-details">
      <div className="book-details-title">
        <Link to="/" className="close-search">
          Close
        </Link>
        <h1>{book.title}</h1>
      </div>

      <div className="container">
        <div className="thumbnail">
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <a href={book.previewLink} target="_blank">
            Preview
          </a>
        </div>
        <div className="content">
          <div>
            <h3>Book Title</h3>
            <p>{book.title}</p>
          </div>
          {!!book.subtitle && (
            <div>
              <h3>Book Subtitle</h3>
              <p>{book.subtitle}</p>
            </div>
          )}
          {!!book.category && (
            <div>
              <h3>Book Categories</h3>
              <p>{book.categories.join(", ")}</p>
            </div>
          )}
          <div>
            <h3>Book Authors</h3>
            <p>{book.authors.join(", ")}</p>
          </div>
          <div>
            <h3>Book Publisher</h3>
            <p>{book.publisher}</p>
          </div>
          <div>
            <h3>Book Description</h3>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ textTransform: "uppercase" }}>
      Book is Loading or Not Found...
    </div>
  );
};

export default BookDetails;
