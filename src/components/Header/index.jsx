import React from 'react';
import './index.css';

const Header = () => (
  <header className="Header">
    <h3 className="Header-heading">
      <i className="fa fa-briefcase" aria-hidden="true" /> CryptoCoin-Folio
    </h3>
    <div className="Header-button-container">
      <button>
            Register
      </button>
      <button>
            Login
      </button>
    </div>
  </header>
);

export default Header;
