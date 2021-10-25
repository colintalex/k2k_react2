import React from "react";
import { Link } from "react-router-dom";

import img from '../../../assets/images/k2k_logo.png'
import Home from "../Home";
import BooksIndex from "../books/BooksIndex";
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
                        {/* <%= link_to 'Home', root_path,  */}
                                {/* className:  'nav-link ' + active_className?(root_path) %> */}
                    </li>

                    <li className="nav-item">
                      <Link to='/books'>Books</Link>

                        {/* <%= link_to 'Books', books_path,  */}
                                {/* className: 'nav-link ' + active_className?(books_path) %> */}
                    </li>

                    <li className="nav-item">
                        {/* <%= link_to 'About', about_path,  */}
                                {/* className: 'nav-link ' + active_className?(about_path) %> */}
                    </li>

                    <li className="nav-item">
                        {/* <%= link_to 'Contact', contact_path,  */}
                                {/* className: 'nav-link ' + active_className?(contact_path) %> */}
                    </li>

                    <li className="nav-item">
                        {/* <%= link_to 'Just For Fun', '#',  */}
                                {/* className: 'nav-link ' + active_className?('#') %> */}
                    </li>

                    <li className="nav-item">
                        {/* <%= link_to 'Blog', blog_path,  */}
                                {/* className: 'nav-link ' + active_className?(blog_path)  %> */}
                    </li>
                    {/* <% if current_admin? %> */}
                    <li className="nav-item">
                        {/* <%= link_to 'Admin', '/admin',  */}
                                {/* className: 'nav-link ' + active_className?(blog_path)  %> */}
                    </li>
                    <li className="nav-item">
                        {/* <%= link_to 'Logout', admin_logout_path, */}
                                {/* className: 'nav-link ' + active_className?(blog_path)  %> */}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
};
export default Header;