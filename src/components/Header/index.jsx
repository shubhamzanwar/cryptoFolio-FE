import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h3
          className="Header-heading"
          onClick={() => this.props.navigatePage(true)}
        >
          <i className="fa fa-briefcase" aria-hidden="true" /> CryptoCoin-Folio
        </h3>
        <div className={this.props.active ? 'Header-button-container' : 'Header-button-container button-active'}>
          <button
            onClick={() => this.props.navigatePage(false)}
            className="register-button"
          >
            Register
          </button>
          <button>
            Login
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  active: PropTypes.bool,
  navigatePage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  active: true,
};

export default Header;
