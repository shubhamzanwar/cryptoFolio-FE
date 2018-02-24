import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Header = () => (
  <header className="Header">
    <Link className="Header-home-link" to="/">
      <h3
        className="Header-heading"
      >
        <i className="fa fa-briefcase" aria-hidden="true" /> CryptoCoin-Folio
      </h3>
    </Link>
    <div className="Header-button-container">
      <Link className="register-button-a" to="/signup">
        <p>Register</p>
      </Link>
      <Link className="login-button-a" to="/login">
        <p>Login</p>
      </Link>
    </div>
  </header>
);

export default Header;
