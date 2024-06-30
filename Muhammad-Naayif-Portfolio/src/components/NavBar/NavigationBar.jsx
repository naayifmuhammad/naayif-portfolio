import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'; // Include your custom CSS here if needed
import { Popup } from '../Popup/Popup';


function NavigationBar() {
  
  const [expanded, setExpanded] = useState(true)

  const handleToggle= () =>{
    setExpanded(!expanded);
  }
  const [popupOpen, setPopup] = useState(false)

  const handlePopup = () => {
    setPopup(!popupOpen)
  }


  return (
    <>
    <Navbar variant="dark" expand="lg" onToggle={handleToggle}>
      <Container className='nav-container justify-content-left px-3'>
        <Navbar.Brand href="/">Naayif</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-link-list px-1">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="https://github.com/naayifmuhammad" target='_blank'><i className="bi bi-github"></i>{!expanded ? " Github " : ""}</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/naayifmuhammad/" target='_blank'><i className="bi bi-linkedin"></i>{!expanded ? " LinkedIn " : ""}</Nav.Link>
            <Nav.Link href="https://www.instagram.com/_naayif" target='_blank'><i className="bi bi-instagram"></i>{!expanded ? " Instagram " : ""}</Nav.Link>
            <Nav.Link href="https://www.threads.net/@_naayif" target='_blank'><i className="bi bi-threads"></i>{!expanded ? " Threads " : ""}</Nav.Link>  
            <Nav.Link href="#" onClick={handlePopup} className={expanded ?  "connect-btn mx-5 py-2 px-3": "connect-btn py-2 px-3"}>Let's connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {popupOpen && <Popup handlePopup={handlePopup}/>}
    </>
  );
}

export default NavigationBar;
