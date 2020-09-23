import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="fixed-bottom"
      style={{ marginTop: "30px" }}
    >
      <Navbar.Brand as={Link} to="/">
        Keikaku
      </Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
