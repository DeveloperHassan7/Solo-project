import React from "react";
import LogOutButton from '../LogOutButton/LogOutButton';
import './Navigation.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap"
// import logo from '../second.png'

function Navigation() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand > SecondConnect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="nav-link" to="/user"></NavLink>

                {/* If no user is logged in, show these links */}
                {!user.id === null &&
                  // If there's no user, show login/registration links
                  <NavLink className="navLink" to="/login">
                    Login / Register
                  </NavLink> 
                }

                {/* If a user is logged in, show these links */}
                {user.id && (
                  <>
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                    <NavLink className="nav-link" to="/search">Apartment</NavLink>
                    <NavLink className="nav-link" to="/favorite">Favorites</NavLink>

                  </>
                )}
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>

                {user.id && (
                  < LogOutButton className="logOutBtn" />
                )}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


    </>
  )

}

export default Navigation;
