import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Form from '../Form';

class LoginForm extends Component {
  submit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    this.props.login(email, password);
  }
  render() {
    return (
      <div className="LoginForm">
        <Form
          error={this.props.message}
          errorType={this.props.messageType}
          formHeading="Login"
          buttonMessage="Login"
          submit={(e) => { this.submit(e); }}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your Email ID"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
};

export default LoginForm;
