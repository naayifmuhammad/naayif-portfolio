import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'; // Include your custom CSS here if needed

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container className='nav-container justify-content-center'>
        <Navbar.Brand href="#banner">Muhammad Naayif</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-link-list">
            <Nav.Link href="#banner">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="https://github.com/naayifmuhammad"><i class="bi bi-github"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/naayifmuhammad/"><i class="bi bi-linkedin"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/naayifmuhammad/"><i class="bi bi-facebook"></i></Nav.Link>
            
            <Nav.Link href="#" className="connect-btn mx-5 py-2 px-3">Let's connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
