import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'; // Include your custom CSS here if needed

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container className='nav-container justify-content-center'>
        <Navbar.Brand href="/">Muhammad Naayif</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-link-list">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="https://github.com/naayifmuhammad" target='_blank'><i className="bi bi-github"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/naayifmuhammad/" target='_blank'><i className="bi bi-linkedin"></i></Nav.Link>
            <Nav.Link href="https://www.instagram.com/_naayif" target='_blank'><i className="bi bi-instagram"></i></Nav.Link>
            <Nav.Link href="https://www.threads.net/@_naayif" target='_blank'><i className="bi bi-threads"></i></Nav.Link>
            
            <Nav.Link href="#" className="connect-btn mx-5 py-2 px-3">Let's connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
