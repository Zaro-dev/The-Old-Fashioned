import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import imgLogo from '../assets/logo.png'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
  
    <Navbar  expand="lg" className="bg-body-tertiary bg-color">
      <Container style={{backgroundColor:"#341D23"}}>
      
        <Navbar.Brand as={Link} to="/">
        <img src={imgLogo} alt="Logo" width={100} />
        The Old Fashioned
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
            <Nav.Link as={Link} to="/bottles">Bottles</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default MyNavbar