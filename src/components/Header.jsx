import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={
              location.pathname === "/"
                ? "btn btn-success"
                : "btn btn-dark text-light"
            }
          >
            Information
          </Navbar.Brand>
        </Link>
        <Link to="/content">
          <Navbar.Brand
            className={
              location.pathname === "/content"
                ? "btn btn-success"
                : "btn btn-dark text-light"
            }
          >
            Content
          </Navbar.Brand>
        </Link>
        <Link to="/footer">
          <Navbar.Brand
            className={
              location.pathname === "/footer"
                ? "btn btn-success"
                : "btn btn-dark text-light"
            }
          >
            Footer
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
