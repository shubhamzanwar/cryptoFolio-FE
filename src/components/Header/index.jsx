import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
      <NavLink className="register-button-a" activeClassName="Header-button-selected" to="/signup">
        <p>Register</p>
      </NavLink>
      <Link className="login-button-a" to="/login">
        <p>Login</p>
      </Link>
    </div>
  </header>
);

export default Header;
