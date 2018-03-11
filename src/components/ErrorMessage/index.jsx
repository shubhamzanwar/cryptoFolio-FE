import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


class ErrorMessage extends Component {
  render() {
    return (
      <div className="error-message-body">
        {this.props.message ?
          <div className="error-message">
            {this.props.message}
          </div> : ''
        }
      </div>
    );
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 0,
};

export default ErrorMessage;
