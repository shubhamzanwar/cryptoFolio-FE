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
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br />
              officia deserunt mollit anim id est laborum.
                </li>
                <li>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br />
              officia deserunt mollit anim id est laborum.
                </li>
                <li>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,<br />
              officia deserunt mollit anim id est laborum.
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
                  placeholder="Your Full Name"
                  required
                  value="abc"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value="abc@gmail.com"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  required
                  value="abc"
                />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Re-enter Password"
                  required
                  value="abc"
                />
                <input
                  type="number"
                  name="contact"
                  placeholder="Contact Number"
                  max="9999999999"
                  required
                  value="999"
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
