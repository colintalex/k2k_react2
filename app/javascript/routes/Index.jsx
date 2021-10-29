import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  { Redirect, useHistory } from 'react-router-dom'
import Home from "../components/Home";
import BooksIndex from "../components/Books/BooksList";
import Header from "../components/shared/Header";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Dashboard from "../components/Admin/Dashboard";
import Admin from "../components/Admin/Admin";
import NewBook from "../components/Admin/Books/NewBook";

export default (
  <Router>
  <Header/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={BooksIndex} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/admin/books/new" exact component={NewBook} />
    </Switch>
  </Router>
); 