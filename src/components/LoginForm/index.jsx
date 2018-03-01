import React from 'react';
import './index.css';


const LoginForm = () => (
  <div className="LoginForm">
    <div className="signup-register">Login</div><br />
    <input
      className="LoginForm-input"
      type="email"
      placeholder="Enter your Email ID"
    />
    <input
      className="LoginForm-input"
      type="password"
      placeholder="Enter Password"
    />
    <div className="LoginForm-button-div">
      <button className="LoginForm-button">Login</button>
    </div>
  </div>
);


export default LoginForm;
