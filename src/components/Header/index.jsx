import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: window.localStorage.getItem('cryptologgedin') === 'true',
    };
  }
  logout() {
    window.localStorage.setItem('cryptologgedin', false);
    window.localStorage.setItem('cryptotoken', null);
    window.localStorage.setItem('cryptousername', null);
    this.setState({
      loggedin: false,
    });
  }
  render() {
    return (
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
          this.state.loggedin ?
            <div className="Header-user-bar">
              <div className="Header-button-container">
                <NavLink
                  className="register-button-a"
                  activeClassName="Header-button-selected"
                  to="/"
                  exact
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
              <div className="Header-user">
                <p>{window.localStorage.getItem('cryptousername')} <i className="fas fa-caret-down" /></p>
                <div className="Header-logout-link">
                  <button
                    className="Header-logout-button"
                    onClick={() => this.logout()}
                  ><p>Logout </p><i className="fas fa-sign-out-alt" />
                  </button>
                </div>
              </div>

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
  }
}

export default Header;
