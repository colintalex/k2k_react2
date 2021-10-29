import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BooksList from "../Books/BooksList";
import NewBook from "./Books/NewBook";

function Dashboard({ admin, token, logout }) {

  useEffect(() => {
    if (token != null) {
      axios.get('/api/v1/admin/login', {
        headers: { "Authenticate": token }
      })
        .then(resp => {
          console.log(resp)
        })
        .catch(resp => {
          logout()
        })
    }
  }, [])

  return(
    <div>
      <h1>Dashboard</h1>
      <Link to='/admin/books/new'>New Book</Link>
      <BooksList></BooksList>
      <button onClick={logout}>LogOut</button>
    </div>
  )
};

export default Dashboard;