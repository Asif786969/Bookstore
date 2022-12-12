import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === "vsharma1035@gmail.com") {
      navigate("/home");
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "30px" }}>Login Here....</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label className="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            name="password"
            className="form-control"
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="/signup">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
