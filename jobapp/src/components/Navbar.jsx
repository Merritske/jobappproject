import React from 'react'
import { Link } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {
  return (
    <div> <nav
    className="navbar fixed-top"
    id="navbar-main"
  >
 
    <Link className="navbar-brand" to="/" title="Home">
      <i className="fa fa-cube"></i>
    </Link>
        <div className="navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/work" title="Work">
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jobs" title="Jobs">
            Jobs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blog" title="Blog">
            Blog
          </Link>
        </li>
    
  
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar