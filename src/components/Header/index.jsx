import React from 'react';
import './index.css';

const Header = () => (
  <header className="Header">
    <h2 className="Header-heading">
        CryptoCoin-Folio
    </h2>
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
