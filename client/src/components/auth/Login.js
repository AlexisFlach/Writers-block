import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
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
    console.log("succes");
  };

  return (
    <Fragment>
      <h1>Sign in</h1>
      <form onSubmit={(e) => onSubmit(e)}>
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
          <button>Submit</button>
        </div>
      </form>
      <p>
        <Link to="/register">Not yes a member?</Link>{" "}
      </p>
    </Fragment>
  );
};

export default Login;
