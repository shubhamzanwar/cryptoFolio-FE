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
              <span className="signup-list">Live ticker and graph:</span>
              Stay updated with the near-real-time values movement<br />
              of cryptocoins and get the visualization of data for 3 periods.
            </li>
            <li>
              <span className="signup-list">Portfolio:</span>
              Create your personalised portfolio of cryptocoins and<br />
              see its value as per current market prices. 
            </li>
            <li>
              <span className="signup-list">Twitter Feed:</span>
              Get what eveyone is talking about the cryptocoins<br />
              on twitter in live twitter feed column.
            </li>
            <li>
              <span className="signup-list">Mark your favroite coins:</span>
              Find your favroite coins always on the top of coins list<br />
              so that you can save your scroll time.
            </li> 
          </ul>
             // <ul>
             //   <li>
             // Get real time updates about your favortie coins<br />
             // with our live ticker and graph feature.
             //   </li>
             //   <li>
             // See What people are talking about<br />
             // Twitter feed from the official handles for the coins of your choice.
             //  </li>
              //  <li>
              //Manage your investments<br />
              //Create a free portfolio to keep track of the coins you own.
                //</li>
              //</ul>
            </div>
          </div>
          <div className="signup-form-div">
            <form className="signup-form" onSubmit={this.registerUser}>
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
