import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';


class Header extends Component {
  logout() {
    window.localStorage.setItem('cryptologgedin', false);
    window.localStorage.setItem('cryptotoken', null);
    window.localStorage.setItem('cryptousername', null);
    this.forceUpdate();
    this.props.history.push('/');
  }
  render() {
    return (
      <header className="Header">
        <div className="Header-container">
          <Link className="Header-home-link" to="/">
            <h3
              className="Header-heading"
            >
              <i className="fa fa-briefcase" aria-hidden="true" /> Crypto Folio
            </h3>
          </Link>
          {
          window.localStorage.getItem('cryptologgedin') === 'true' ?
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
                <NavLink
                  className="register-button-a"
                  activeClassName="Header-button-selected"
                  to="/transfers"
                >
                  <p>Transfers</p>
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

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
