import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="auth">
      <div className="auth-box">
        <h3>Welcome back!</h3>
        <p>
          Login to your account <br></br>and see whats new!{" "}
        </p>
      </div>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <button className="button">Submit</button>
          </div>
        </form>
        <p>
          <Link to="/register">Not yes a member?</Link>{" "}
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
