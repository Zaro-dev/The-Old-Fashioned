import React from "react";
import Navbar from "react-bootstrap/Navbar";
import imgLogo from "../assets/logo-definitivo.png";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function MyNavbar() {
  const { isDarkMode, handleToggleTheme } = useContext(ThemeContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary navbar-div"
      data-bs-theme={isDarkMode ? "dark" : "light"}
      //style={{ backgroundColor: "red" }}
    >
      <Container
        className={`navbar-container important-container ${
          isDarkMode ? "navbar-container-dark" : "navbar-container-light"
        }`}
      >
        <Navbar.Brand as={Link} to={"/"}>
          <img src={imgLogo} alt="" width={75} />
          The Old Fashioned
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
            <NavDropdown title="Whiskeys" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/companies"}>
                Companies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/bottles"}>
                Bottles
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item>
              {isDarkMode ? (
                <button onClick={handleToggleTheme} className="solSombra">
                  ☀️
                </button>
              ) : (
                <button onClick={handleToggleTheme} className="solSombra">
                  🌑
                </button>
              )}
            </NavDropdown.Item>
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
