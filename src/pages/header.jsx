import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/header.css';
import Logo from './logo-no-background.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(location.pathname);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveKey(location.pathname);
    setOpenDropdown(null); // Close dropdown when navigating
  }, [location]);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleMenuItemClick = () => {
    setOpenDropdown(null); // Close dropdown immediately when an item is clicked
  };

  return (
    <Navbar expand="lg" fixed="top" className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey={activeKey}>
            <LinkContainer to="/">
              <Nav.Link eventKey="/">Home</Nav.Link>
            </LinkContainer>
            
            {/* Services Dropdown */}
            <NavDropdown
              title="Services"
              id="services-dropdown"
              show={openDropdown === "services"}
              onClick={() => handleDropdownToggle("services")}
            >
              <LinkContainer to="/text">
                <NavDropdown.Item eventKey="/text" onClick={handleMenuItemClick}>Text Annotation</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/image">
                <NavDropdown.Item eventKey="/image" onClick={handleMenuItemClick}>Image Annotation</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/audio">
                <NavDropdown.Item eventKey="/audio" onClick={handleMenuItemClick}>Audio Annotation</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/video">
                <NavDropdown.Item eventKey="/video" onClick={handleMenuItemClick}>Video Annotation</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            {/* Use Cases Dropdown */}
            <NavDropdown
              title="Use Cases"
              id="use-cases-dropdown"
              show={openDropdown === "useCases"}
              onClick={() => handleDropdownToggle("useCases")}
            >
              <LinkContainer to="/drone_satellites">
                <NavDropdown.Item eventKey="/drone_satellites" onClick={handleMenuItemClick}>Drone Satellites</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/facial_recognitio">
                <NavDropdown.Item eventKey="/facial_recognitio" onClick={handleMenuItemClick}>Facial Recognition</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Self_driving_cars">
                <NavDropdown.Item eventKey="/Self_driving_cars" onClick={handleMenuItemClick}>Self Driving Cars</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Sports_annotation">
                <NavDropdown.Item eventKey="/Sports_annotation" onClick={handleMenuItemClick}>Sports Annotation</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Video_motion_tracking">
                <NavDropdown.Item eventKey="/Video_motion_tracking" onClick={handleMenuItemClick}>Video Motion Tracking</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/contact">
              <Button className="contact-us-btn ms-2">Contact Us</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
