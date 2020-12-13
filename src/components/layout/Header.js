import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <ul className="main-nav">
        <li style={{ float: "left" }}>
          <Link
            className="li-link"
            to="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Keikaku
          </Link>
        </li>
        <li style={{ float: "left" }}>
          <Link
            className="li-link"
            to="/season/current"
            style={{ textDecoration: "none", color: "black" }}
          >
            Season
          </Link>
        </li>
        <li style={{ float: "left" }}>
          <Link
            className="li-link"
            to="/search"
            style={{ textDecoration: "none", color: "black" }}
          >
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
