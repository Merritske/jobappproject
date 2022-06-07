import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../styles/navbar.css'
import { selectUser } from './userSlice';
import firebase from "firebase/compat/app";

function NavbarHome() {
  const user =useSelector(selectUser);
  console.log(user)
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
      <h3>{user.displayName}</h3>
      <button  className="btn-signout" onClick={e=>firebase.auth().signOut()}>SignOut</button>
    </Container>
  )
}

export default NavbarHome