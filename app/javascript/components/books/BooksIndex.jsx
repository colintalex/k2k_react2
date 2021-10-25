import React, { useEffect, useState } from "react";
import axios from 'axios';

function BooksIndex() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/books')
      .then(resp => {
        setBooks(resp.data)
      })
      .catch(resp => {
        console.log(resp)
      })
  },[])

  const booksList = []
  books.forEach((book, index) => {
    booksList.push(
      <li key={index}>
        {book.title}, {book.id}
      </li>
    )
  });

  return(
    <ul className="book-list 0">
      <li>
        <div className="book">
          Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        </div>
      </li>
      {booksList}
    </ul>
  )
};

export default BooksIndex;