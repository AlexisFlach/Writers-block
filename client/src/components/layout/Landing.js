import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayPosts from "../posts/DisplayPosts";
import Register from "../auth/Register";
import Login from "../auth/Login";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="landing-page">
        <div className="flex-box">
          <h1 className="landing-heading landing-heading-1">Writers Block</h1>
          <p>
            We are not - we are not keeping up with other websites. Lorem Ipsum
            best not make any more threats to your website. It will be met with
            fire and fury like the world has never seen. Does everybody know
            that pig named Lorem Ipsum? An ‘extremely credible source’ has
            called my office and told me that Barack Obama’s placeholder text is
            a fraud.
          </p>
          <div className="buttons">
            <Link to="/register">
              <button type="button">Register</button>
            </Link>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <DisplayPosts />
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
