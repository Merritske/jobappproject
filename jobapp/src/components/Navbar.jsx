import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/navbar.css'

function NavbarHome() {
  return (
    <Container fluid className=" navbar" >
      <Navbar
        id="navbar-main">
        <Navbar.Brand href="/" >
          <i className="fa fa-cube"></i>
        </Navbar.Brand>
        <Nav className="nav-item  ">
          <Nav.Link href="/work" className="nav-link">Post job</Nav.Link>
          <Nav.Link href="/jobs" className="nav-link">Upload CV</Nav.Link>
          <Nav.Link href="/blog" className="nav-link">Blog</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default NavbarHome