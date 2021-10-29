import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Home from "../Home";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";


function Admin() {
  const history = useHistory();
  const [admin, setAdmin] = useState({} || localStorage.getItem('admin'));
  const [token, setToken] = useState('' || localStorage.getItem('token'))
  const [loggedIn, setLoggedIn] = useState(false || localStorage.getItem('logged_in?'));
  
  const csrf_token = document.querySelector('[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token
  axios.defaults.headers.common['Accept'] = 'application/json'

  function setAdminUser(data) {
    setAdmin(data.user)
    setToken(data.token)
    setLoggedIn(true)        
    localStorage.setItem('admin', data.user)
    localStorage.setItem('token', data.token)
    localStorage.setItem('logged_in?', true)
  }

  function logout() {
    localStorage.removeItem('admin')
    localStorage.removeItem('token')
    localStorage.removeItem('logged_in?')
    setAdmin({})
    setLoggedIn(false)
    setToken('')
    history.push('/')
  }

  if (loggedIn) {
    return <Dashboard admin={admin} token={token} logout={logout}/>
  } else {
    return <AdminLogin setAdminUser={setAdminUser} history={history} />
  }
};

export default Admin;