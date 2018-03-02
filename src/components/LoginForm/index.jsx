import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: '',
      password: '',
    };
  }
  saveEmail(value) {
    this.setState({
      emailid: value,
    });
  }
  savePassword(value) {
    this.setState({
      password: value,
    });
  }
  submit() {
    this.props.login(this.state.emailid, this.state.password);
  }
  render() {
    return (
      <div className="LoginForm">
        <div className="signup-register">Login</div><br />

        {this.props.message ?
          <div className="LoginForm-error">
            {this.props.message}
          </div> : ''}
        <input
          className="LoginForm-input"
          type="email"
          placeholder="Enter your Email ID"
          value={this.state.emailid}
          onChange={event => this.saveEmail(event.target.value)}
        />
        <input
          className="LoginForm-input"
          type="password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={event => this.savePassword(event.target.value)}
        />
        <div className="LoginForm-button-div">
          <button
            className="LoginForm-button"
            onClick={() => this.submit()}
          >Login
          </button>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default LoginForm;
