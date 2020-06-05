import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Navbar</h2>
      <ul>
        <li>
          <Link to="/Register">Register</Link>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
