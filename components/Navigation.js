// Navigation.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" onClick={() => scrollToSection('home')}>
        <img src="/aquologo.png" alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> {/* Change this line to align nav items to the right */}
          <Nav.Link onClick={() => scrollToSection('AboutUs')}>About</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('Team')}>Team</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('UseCases')}>Use Cases</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('Market')}>Market</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('TechTabs')}>Tech</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('Pitch')}>Pitch</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('Roadmap')}>Roadmap</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('Story')}>Story</Nav.Link>
          {/* ... other Nav.Links ... */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

