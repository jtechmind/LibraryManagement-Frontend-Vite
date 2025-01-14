import axios from "axios";
import React, { useState } from "react";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/books/", book);
      alert("Book created successfully!");
    } catch (error) {
      console.error("Error while creating a book: ", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={book.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
