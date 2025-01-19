import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BooksList from "../modules/Books/BooksList";
import AddBook from "../modules/Books/AddBook";
import "../App.css";
import Signup from "../modules/Auth/Signup";
import Login from "../modules/Auth/Login";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Footer />
      <Sidebar />
      <main className="body-content">
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutes;
