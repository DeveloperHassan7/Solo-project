import React from "react";
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Navigation.css';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from '../second.png'
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Navigation() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} width="90px" height="40px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  /> <FontAwesomeIcon icon={faBars} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-link" href="#favorite">Favorites</Nav.Link>
              <Nav.Link className="nav-link" href="#search">Apartment</Nav.Link>
              <Nav.Link className="nav-link" href="#about">About</Nav.Link>
              <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
              <Nav.Link className="nav-link" href="#logout">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )

}

export default Navigation;
