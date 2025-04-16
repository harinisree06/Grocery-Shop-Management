import React, { useState } from "react";
import "./Login.css";

const Login = ({ handleLogin, setIsSigningUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Check credentials stored in localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      handleLogin();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <p onClick={() => setIsSigningUp(true)} className="signup-link">
          Don't have an account? Sign up
        </p>
      </form>
    </div>
  );
};

export default Login;
