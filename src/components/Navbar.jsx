import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import imgLogo from '../assets/logo-definitivo.png'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';


function MyNavbar() {

  return(
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={'/'} style={{textDecoration: "none"}}>
        <Navbar.Brand> <img src={imgLogo} alt="" width={75} />The Old Fashioned</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to={'/'} style={{textDecoration: "none",color:"black"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to={'/about'} style={{textDecoration: "none",color:"black"}}>About</Link></Nav.Link>
            <NavDropdown title="Whiskeys" id="collapsible-nav-dropdown" style={{textDecoration: "none",color:"black"}}>
              <NavDropdown.Item ><Link to={'/companies'} style={{textDecoration: "none",color:"black"}}>Companies</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to={'/bottles'} style={{textDecoration: "none",color:"black"}}>Bottles</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

/* function MyNavbar() {
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

export default MyNavbar */