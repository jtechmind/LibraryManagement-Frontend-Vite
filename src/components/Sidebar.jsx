import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/members">Members</a>
        </li>
        <li>
          <a href="/transactions">Transactions</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
