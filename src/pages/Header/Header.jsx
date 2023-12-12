import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#fff"
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-cyan-600">
        <Container varient="light">
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="Healthcare" width="100" height="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5 fw-bold">
              <Nav.Link as={NavLink} className="nav-link" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link" to="/appointment">
                Appointment
              </Nav.Link>
            </Nav>
            <Navbar.Text className="fs-5 fw-bold">
              <Nav.Link as={NavLink} className="nav-link" to="/login">
                <button className="bg-amber-400 w-40 h-10 rounded-lg text-lg text-black hover:text-white">
                  <i className="fas fa-sign-in-alt me-2 "></i>
                  Sign in
                </button>
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
