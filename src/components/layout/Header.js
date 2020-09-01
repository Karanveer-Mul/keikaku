import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSeason } from "../../actions/getSeason";
import { getTop } from "../../actions/getTop";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Keikaku
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link
          as={Link}
          to="/season/current"
          onClick={() => {
            getSeason(dispatch);
          }}
        >
          Season
        </Nav.Link>
        <Nav.Link as={Link} to="/top/anime" onClick={() => getTop(dispatch)}>
          Top
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
