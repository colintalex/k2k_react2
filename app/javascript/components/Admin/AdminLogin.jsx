import React, { useState } from "react";
const axios = require('axios').default;

function AdminLogin({ setAdminUser, history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login(e) {
    e.preventDefault();
    
    axios.post('/api/v1/admin/login', {
      email,
      password})
      .then(resp => {
        setAdminUser(resp.data)
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