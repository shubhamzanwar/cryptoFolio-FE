import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from '../LoginForm';
import './index.css';

class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '', // will be added to the store
      name: '', // will be added to the store
      message: '',
    };
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
        console.log(response.data.code);
        switch (response.data.code) {
          case 200:
            this.setState({
              token: response.data.token,
              name: response.data.fullName,
            });
            this.props.history.push('/');
            break;

          default: this.setState({
            message: 'Username or password incorrect',
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
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


export default LoginBody;
