import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              src="https://i.pinimg.com/736x/49/a7/24/49a7247bc0f530e1d427f6dab3c32cf0.jpg"
              style={{ width: "60px", height: "50px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/about"}>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/projects"}>Projects</Link>
            </Nav.Link>
            <Nav.Link
              href={require("../../Assets/pdf/Sultanov_Ilyas.pdf")}
              // download="Sultanov_Ilyas_CV"
              target="pdf-frame"
              alt="Sultanov_Ilyas_CV"
            >
              Download CV
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Change Language" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">English</NavDropdown.Item>
              <NavDropdown.Item href="#">Russian</NavDropdown.Item>
              <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#">Arabic</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <Link to={"/contact"}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
