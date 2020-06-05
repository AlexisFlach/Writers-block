import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h2>Landing</h2>
      <div className="button">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Landing;
