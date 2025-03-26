// src/components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../public/assets/logo.jpeg'; // Adjust the path based on your folder structure

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="BookMyShow Logo"
            width="100"  // Increased width
            height="100" // Increased height
            className="d-inline-block align-top me-2"
          />
          BookMyShow
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies-mumbai">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/stream">
              Stream
            </Nav.Link>
            <Nav.Link as={Link} to="/events-mumbai">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/plays-mumbai">
              Plays
            </Nav.Link>
            <Nav.Link as={Link} to="/sports-mumbai">
              Sports
            </Nav.Link>
            <Nav.Link as={Link} to="/activities-mumbai">
              Activities
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
