import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import logo from "../Images/logo.png";

const Header = () => {
  // const { user, logOut } = useAuth();

  const activeStyle = {
    fontWeight: "bold",
    color: "#0409a9"
  };

  return (
    <>
      <Navbar  expand="lg" sticky="top" className=" bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-cyan-600">
        <Container varient="light">
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="Healthcare" width="100" height="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5 fw-bold">
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/appointment">
                Appointment
              </Nav.Link>
            </Nav>
            <Navbar.Text className="fs-5 fw-bold">
              {/* {user.email ? (
                <div>
                  <i className="fas fa-user"></i> {user?.displayName}
                  <button onClick={logOut} className="btn btn-secondary text-center ms-2">
                    <i className="fas fa-sign-out-alt mx-auto"></i>
                  </button>
                </div>
              ) : (
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login">
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Login
                </Nav.Link>
              )} */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
