import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.css';

const Header = () => (
  <header className="Header">
    <div className="Header-container">
      <Link className="Header-home-link" to="/">
        <h3
          className="Header-heading"
        >
          <i className="fa fa-briefcase" aria-hidden="true" /> CryptoFolio
        </h3>
      </Link>
      {
          window.localStorage.getItem('cryptologgedin') ?
            <div className="Header-user-bar">
              <div className="Header-button-container">
                <NavLink
                  className="register-button-a"
                  activeClassName="Header-button-selected"
                  to="/"
                >
                  <p>Home</p>
                </NavLink>
                <NavLink
                  className="register-button-a"
                  activeClassName="Header-button-selected"
                  to="/portfolio"
                >
                  <p>Portfolio</p>
                </NavLink>
              </div>
              <p>{window.localStorage.getItem('cryptousername')}</p>
            </div> :
            <div className="Header-button-container">
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/signup"
              >
                <p>Register</p>
              </NavLink>
              <NavLink
                className="login-button-a"
                to="/login"
                activeClassName="Header-button-selected"
              >
                <p>Login</p>
              </NavLink>
            </div>
        }

    </div>
  </header>
);

export default Header;
