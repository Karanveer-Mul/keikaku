import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            Keikaku
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink
            to="/season/current"
            style={{ color: "white", textDecoration: "none" }}
          >
            Season
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
