import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NotFound = () => (
  <div className="NotFound">
    <h2 className="NotFound-error-code">Error 404</h2>
    <h3 className="NotFound-error-message">The Page you were looking for was not Found</h3>
    <Link className="NotFound-go-back-home-button" to="/">
      Go back home?
    </Link>
  </div>
);

export default NotFound;
