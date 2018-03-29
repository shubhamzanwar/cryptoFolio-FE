import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import Form from '../Form';
import './index.css';

class SignupBody extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }
  componentWillMount() {
    if (window.localStorage.getItem('cryptologgedin') === 'true') {
      this.props.history.push('/');
    }
  }
  registerUser(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const fullName = data.get('fullname');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmpassword');
    const mobileNumbe = data.get('contact');
    if (password !== confirmPassword) {
      Alert.error('Passwords do not match', {
        position: 'top-right',
        effect: 'jelly',
        customFields: {
          button: false,
        },
      });
    } else {
      const payload = {
        fullName,
        email,
        password,
        confirmPassword,
        mobileNumbe,
      };
      fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
        .then((response) => {
          switch (response.status) {
            case 201:
              // this.props.history.push('/login', { message: 'Registration Successfull! Please login' });
              Alert.success('Registration Successfull! Please login', {
                position: 'top-right',
                effect: 'jelly',
                customFields: {
                  button: true,
                  onClick: () => this.props.history.push('/login'),
                },
              });
              break;

            case 409:
              Alert.info('You are already registered', {
                position: 'top-right',
                effect: 'jelly',
                customFields: {
                  button: true,
                  onClick: () => this.props.history.push('/login'),
                },
              });
              break;

            case 422:
              Alert.error('Please provide correct details', {
                position: 'top-right',
                effect: 'jelly',
                customFields: {
                  button: false,
                },
              });
              break;

            default: Alert.error('Internal server error. Please try again', {
              position: 'top-right',
              effect: 'jelly',
              customFields: {
                button: false,
              },
            });
          }
        })
        .catch(() => {
          Alert.error('Internal server error. Please try again', {
            position: 'top-right',
            effect: 'jelly',
            customFields: {
              button: false,
            },
          });
        });
    }
  }

  render() {
    return (
      <div className="signup-body-div">
        <div className="signup-body">
          <div className="signup-text">
            <div className="signup-heading">
              Why Should I Register ?
            </div>
            <div className="signup-bullets">
              <ul>
                <li>
                  Get real time updates about your favortie coins<br />
                  with our live ticker and graph feature
                </li>
                <li>
                  See What people are talking about<br />
                  Twitter feed from the official handles for the coins of your choice
                </li>
                <li>
                  Manage your investments<br />
                  Create a free portfolio to keep track of the coins you own
                </li>
              </ul>
            </div>
          </div>

          <Form
            error={this.state.error}
            submit={(e) => { this.registerUser(e); }}
            formHeading="Register"
            buttonMessage="Create your account"
          >
            <input
              type="text"
              name="fullname"
              required
              placeholder="Enter your Full Name"
            />
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
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              required
            />
            <input
              type="number"
              name="contact"
              placeholder="Enter your Contact Number"
              max="9999999999"
              required
            />
          </Form>
        </div>
      </div>
    );
  }
}

SignupBody.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignupBody;
