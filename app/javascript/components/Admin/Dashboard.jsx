import React from "react";
import { Link } from "react-router-dom";
import BooksList from "../Books/BooksList";
import NewBook from "./Books/NewBook";

function Dashboard() {
  return(
    <div>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <Link to='/admin/books/new'>New Book</Link>
      <BooksList></BooksList>
    </div>
  )
};

export default Dashboard;