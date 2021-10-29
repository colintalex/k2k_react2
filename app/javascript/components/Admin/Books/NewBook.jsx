import axios from "axios";
import React, { useState } from "react";

function NewBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [illustrator, setIllustrator] = useState('');

  function updateBook(e) {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break;
      case 'desc':
        setDescription(e.target.value)
        break;
      case 'author':
        setAuthor(e.target.value)
        break;
      case 'illustrator':
        setIllustrator(e.target.value)
        break;
    }
  };
  function createBook() {
    const csrf_token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token
    axios.defaults.headers.common['Accept'] = 'application/json'
    const book = { title: title, description: description, author: author, illustrator: illustrator};
    axios.post('/api/v1/admin/books',
    book)
    .then(resp => {
      console.log(resp)
    })
    .catch(resp => {
      console.log(resp)
    })
  };
  return(
    <div>
      <h1>NewBook</h1>
      <form onSubmit={createBook}>
        <input type='text' name='title' value={title} onChange={e => updateBook(e)}/>
        <input type='text' name='desc' value={description} onChange={e => updateBook(e)}/>
        <input type='text' name='author' value={author} onChange={e => updateBook(e)}/>
        <input type='text' name='illustrator' value={illustrator} onChange={e => updateBook(e)}/>
        <input type='submit' text='Save'/>
      </form>
    </div>
  )
};

export default NewBook;