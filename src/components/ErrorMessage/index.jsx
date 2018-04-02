import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


class ErrorMessage extends Component {
  render() {
    console.log(this.props.messageType);
    return (
      <div className="error-message-body">
        {this.props.message ?
        this.props.messageType === 'Error' ?
          <div className="error-message">
            {this.props.message}
          </div>
            :
          <div className="error-message ErrorMessage-Success">
            {this.props.message}
          </div>
            : ''
        }
      </div>
    );
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  messageType: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 0,
  messageType: 'Error',
};

export default ErrorMessage;
