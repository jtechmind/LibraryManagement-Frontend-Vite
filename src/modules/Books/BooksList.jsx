import axios from "axios";
import React, { useEffect, useState } from "react";

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const resonse = await axios.get("http://localhost:8080/api/v1/books");
      setBooks(resonse.data);
    } catch (error) {
      console.error("fetching books error: ", error);
    }
  };

  return (
    <div>
      <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
