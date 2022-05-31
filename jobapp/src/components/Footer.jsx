import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import "../styles/App.css";

function Footer() {
  return (
    <Container fluid>
        <footer className="footer text-center
         bg-secondary">
         
 <p className="pt-1">© 1980–2022 Fatema-An</p>
 <ListGroup horizontal  >
    <ListGroup.Item  className='footerlist' >
        <a href="#">Privacy Policy</a>
        </ListGroup.Item>
    <ListGroup.Item className='footerlist'>
        <a href="#">Terms of Use</a>
        </ListGroup.Item>
    <ListGroup.Item className='footerlist'>
        <a href="#">Support</a>
        </ListGroup.Item>
 </ListGroup>
           </footer>
       
     
    </Container>
  )
}

export default Footer