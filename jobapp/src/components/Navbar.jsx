import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/navbar.css'

function NavbarHome() {
  return (
    <Container fluid className="fixed-top navbarC px-5 " >
    <Navbar className="navbar  " 
    id="navbar-main">
   
   <Navbar.Brand href="/" >
  <i className="fa fa-cube"></i>
  </Navbar.Brand>
  <Nav className="nav-item me-auto  ">
        <Nav.Link href="/work" className="nav-link">Post job</Nav.Link>
        <Nav.Link href="/jobs" className="nav-link">Upload CV</Nav.Link>
        <Nav.Link href="/blog"className="nav-link">Blog</Nav.Link>
</Nav>

        {/* <div className="navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/work" title="Work">
         Post job
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jobs" title="Jobs">
         upload CV
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blog" title="Blog">
            Blog
          </Link>
        </li>
    
  
      </ul>
    </div> */}
 


    </Navbar>
   


    
    </Container>

    )
}

export default NavbarHome