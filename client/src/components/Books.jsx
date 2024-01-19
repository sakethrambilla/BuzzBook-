import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books/");
        setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2 className="">{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add"> Add Book</Link>
      </button>
    </div>
  );
};

Books.propTypes = {};

export default Books;
