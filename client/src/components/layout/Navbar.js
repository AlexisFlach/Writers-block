import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const imgStyle = {
  height: "200px",
};

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <li className="landing-para">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="landing-para">
        {" "}
        <Link to="/profiles">Profiles</Link>
      </li>
      <li className="landing-para">
        {" "}
        <Link to="/posts">Posts</Link>
      </li>
      <li className="landing-para">
        <a onClick={logout} href="/">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = <Fragment></Fragment>;
  return (
    <Fragment>
      <nav className="flex justify-between align-center">
        <Link to="/">
          <img
            style={imgStyle}
            src="/img/rsz_about-me-monkey.png"
            alt="logo"
            className="logo"
          ></img>
        </Link>

        {/* <div>
            <button type="button">
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
          </div> */}

        {!loading && (
          <ul className="list-none flex">
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        )}
      </nav>
    </Fragment>
  );
};

Navbar.protoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
