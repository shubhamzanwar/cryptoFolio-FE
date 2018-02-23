import React, { Component } from 'react';

import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h3
          className="Header-heading"
          onClick={() => this.props.navigatePage(1)}
        >
          <i className="fa fa-briefcase" aria-hidden="true" /> CryptoCoin-Folio
        </h3>
        <div className="Header-button-container">
          <button
            onClick={() => this.props.navigatePage(0)}
            className={this.props.active ? 'button-active' : ''}
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

export default Header;
