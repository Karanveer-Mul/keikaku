import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand as={Link} className="font-weight-bold text-muted" to="/">
        Keikaku
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/season/current">
          Season
        </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/watch-list">
            Watchlist
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
