import React, { Component } from 'react';
import Header from '../Header';
import './index.css';


class SignupBody extends Component {
  // constructor() {
  //   super();
  // }

  registerUser = (data) => {
    console.log(data);
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
              with our live ticker and graph feature.
                </li>
                <li>
              See What people are talking about<br />
              Twitter feed from the official handles for the coins of your choice.
                </li>
                <li>
              Manage your investments<br />
              Create a free portfolio to keep track of the coins you own.
                </li>
              </ul>
            </div>
          </div>
          <div className="signup-form-div">
            <form className="signup-form">
              <div className="signup-form-padding">
                <div className="signup-register">Register</div><br />
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
              </div>
              <div className="signup-submit">
                <button type="submit" onSubmit={(value) => this.registerUser(value.target)}>Create your account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default SignupBody;
