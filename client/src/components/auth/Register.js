import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import axios from "axios";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match!", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="auth">
      <div>
        <h3>Register</h3>
        <p>lorem10 </p>
      </div>
      <div>
        <h1>Register</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
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
            <input
              type="text"
              placeholder="password2"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
        <p>
          Already have an account?
          <Link to="/login"> Click here</Link>{" "}
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
