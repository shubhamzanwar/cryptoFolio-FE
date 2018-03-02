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
        if (response.data.code === 200) {
          this.setState({
            token: response.data.token,
            name: response.data.fullName,
            message: 'success',
          });
        } else {
          this.setState({
            message: response.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
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
