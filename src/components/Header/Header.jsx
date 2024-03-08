import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="secondary">
        <Container>
          <NavLink className="nav-link" to="/Home">
            Navbar
          </NavLink>
          <Nav className="me-auto">
            <NavLink className="nav-link text-dark" to="/Home">
              Home
            </NavLink>
            <NavLink className="nav-link text-dark" to="/Features">
              Features
            </NavLink>
            <NavLink className="nav-link text-dark" to="/Pricing/shirt">
              Price of shirt
            </NavLink>
            <NavLink className="nav-link text-dark" to="/Pricing/pent">
              Price of pent
            </NavLink>
            <NavLink className="nav-link text-dark" to="/Pricing/boxer">
              Price of boxer
            </NavLink>
          </Nav>
          <button
            className="btn btn-dark"
            onClick={() => navigate("/Features")}
          >
            Features
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
