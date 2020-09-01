import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">AIOT</Link>
      <Link to="/shows">Shows</Link>
      {/* <Link to="/shows">Shows</Link> */}
      <Link to="/movies">Movies</Link>
    </nav>
  );
};

export default Navbar;
