import React, { Component } from 'react';
import './index.css';


class SignupBody extends Component {
  registerUser = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const fullName = data.get('fullname');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmpassword');
    const mobileNumbe = data.get('contact');
    if(password === confirmPassword){
      const payload = {
        fullName,
        email,
        password,
        confirmPassword,
        mobileNumbe,
      }
      fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Success");
        }
        return null;
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
            <form className="signup-form" onSubmit={this.registerUser}>
              <div className="signup-form-padding">
                <div className="signup-register">Register</div><br />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  required
                />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Re-enter Password"
                  required
                />
                <input
                  type="number"
                  name="contact"
                  placeholder="Contact Number"
                  max="9999999999"
                  required
                />
              </div>
              <div className="signup-submit">
                <button 
                  type="submit" 
                >
                  Create your account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default SignupBody;
