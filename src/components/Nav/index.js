import React from "react";
import "./style.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
      {/* <li className="navbar-item">
              <Link to="/" className="nav-link">Education</Link>
            </li> */}
      </a>
    </nav>
  );
}

export default Nav;
