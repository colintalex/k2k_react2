import React from "react";
import { Link } from "react-router-dom";

import img from '../../../assets/images/k2k_logo.png'

function Header() {
  return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    {/* <%= params[:admin] %> */}
        <div className="container-md" id="nav-wrapper">
            {/* <%= image_tag('k2k_logo') %> */}
            <img src={img} alt=""/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                      <Link to='/'>Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link to='/books'>Books</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/about'>About</Link>
                    </li>

                    <li className="nav-item">
                      <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/admin'>Admin</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
};
export default Header;