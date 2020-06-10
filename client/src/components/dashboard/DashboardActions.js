import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <Link to="/edit-profile">
        <h3>Edit profile</h3>
      </Link>
      <Link to="/post">
        <h3>Post something</h3>
      </Link>
    </div>
  );
};

export default DashboardActions;
