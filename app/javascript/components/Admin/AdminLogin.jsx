import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
const axios = require('axios').default;

function AdminLogin({ setAdmin, setLoggedIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  function login(e) {
    e.preventDefault();
    const token = document.querySelector('[name=csrf-token]').content
    
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.defaults.headers.common['Accept'] = 'application/json'
    
    axios.post('/api/v1/admin/login', {
      email,
      password})
      .then(resp => {
        setAdmin(resp.data);
        setLoggedIn(true);
        localStorage.setItem('admin', resp.data)
        localStorage.setItem('logged_in?', true)
        history.push('/admin')
      })
      .catch(resp => {
        console.log(resp)
        history.push('/')
      })
  };

  function updateEmail(event) {
      setEmail(event.target.value)
  };

  function updatePassword(event) {
      setPassword(event.target.value)
  };

  return(
    <div>
      <form onSubmit={e => login(e)}>
        <input type='text' value={email} name='EMail' onChange={(e) => updateEmail(e)} placeholder='E-Mail'></input>
        <input type='password' value={password} name='Password' onChange={(e) => updatePassword(e)} placeholder='Password'></input>
        <input type='submit'/>
      </form>
    </div>
  )
};

export default AdminLogin;