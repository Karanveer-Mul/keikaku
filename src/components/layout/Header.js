import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Keikaku
      </Navbar.Brand>
      <Nav.Link as={Link} to="/season/current">
        Season
      </Nav.Link>
      {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse id="responsive-navbar-nav">
        
      </Navbar.Collapse>*/}
    </Navbar>
  );
};

export default Header;
