import React, { useEffect, useState } from "react";
import Home from "../Home";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";

function Admin() {
  const [admin, setAdmin] = useState({} || localStorage.getItem('admin'));
  const [loggedIn, setLoggedIn] = useState(false || localStorage.getItem('logged_in?'));

  function logout(id) {
    localStorage.removeItem('admin')
    localStorage.removeItem('logged_in?')
  }

  if (loggedIn) {
    return <Dashboard admin={admin}/>
  } else {
    return <AdminLogin setAdmin={setAdmin} setLoggedIn={setLoggedIn}/>
  }
};

export default Admin;