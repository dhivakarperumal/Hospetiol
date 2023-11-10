import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from './icon.png';
import './Navbar.css';



function Navbars() {
  return (
    <>


      <Navbar expand="lg" className="navbars">
        <Container fluid>
          <Navbar.Brand href="#" className='logo'><img src={img1} alt='' width={55} height={55} /><span>Hospital</span></Navbar.Brand>
          <Navbar.Toggle  className='navbtn'/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className='home'>HOME</Nav.Link>
              <Nav.Link as={Link} to="/about" className='about'>ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/trements" className='tretments'>TREATMENT</Nav.Link>
              <Nav.Link as={Link} to="/doctors" className='doctors'>DOCTORS</Nav.Link>
              {/* <Nav.Link as={Link} to="/testimonial"className='test' >TESTIMONIAL</Nav.Link> */}
              <Nav.Link as={Link} to="/contacts" className='contact'>CONTACT US</Nav.Link>
              <Nav.Link as={Link} to="/login" className='logoin'>LOGIN</Nav.Link>
              {/* <Nav.Link as={Link} to="/singup" className='singup'>SIGNUP</Nav.Link> */}
              <Nav.Link as={Link} to="/pations" className='singup'>PATIENT DETAILS ADD</Nav.Link>
              
              
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbars