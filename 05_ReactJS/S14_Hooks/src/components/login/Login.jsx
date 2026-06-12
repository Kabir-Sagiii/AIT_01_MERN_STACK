// Login.jsx
import { useState, useContext } from "react";
import LoginContext from "../context-api/loginContext";
const Login = () => {
  const login = useContext(LoginContext);
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
            />
          </div>

          {/* Remember Me */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={login}
            type="button"
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-3">
          <a href="/" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
