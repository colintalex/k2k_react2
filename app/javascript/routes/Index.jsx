import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import BooksIndex from "../components/books/BooksIndex";
import Header from "../components/shared/Header";

export default (
  <Router>
  <Header/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={BooksIndex} />
    </Switch>
  </Router>
); 