import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import LoginForm from '../LoginForm';
import './index.css';

class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  componentWillMount() {
    if (window.localStorage.getItem('cryptologgedin') === 'true') {
      this.props.history.push('/');
    } else if (this.props.location.state && this.props.location.state.message) {
      this.setState({
        message: this.props.location.state.message,
      });
    }
  }
  getNotifications=() => {
    const authToken = window.localStorage.getItem('cryptotoken');
    fetch('/notification', {
      method: 'GET',
      headers: {
        authtoken: authToken,
      },
    }).then(data => data.json())
      .then((data) => {
        window.localStorage.setItem('cryptoNotifications', JSON.stringify(data));
        (this.props.history).push('/');
      });
  }
  login(email, password) {
    const options = {
      url: '/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    };
    axios(options)
      .then((response) => {
        switch (response.data.code) {
          case 200:
            window.localStorage.setItem('cryptotoken', response.data.token);
            window.localStorage.setItem('cryptouserid', response.data.userId);
            window.localStorage.setItem('cryptousername', response.data.username);
            window.localStorage.setItem('cryptologgedin', true);
            this.getNotifications();

            break;

          default: this.setState({
            message: 'Username or password incorrect',
          });
        }
      })
      .catch(() => {
        this.setState({
          message: 'Sorry! some internal error occured',
        });
      });
  }
  render() {
    return (
      <div className="LoginBody">
        <div className="LoginBody-tint">
          <LoginForm
            message={this.state.message}
            login={(email, password) => this.login(email, password)}
          />
        </div>
      </div>
    );
  }
}


LoginBody.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
};


export default LoginBody;
