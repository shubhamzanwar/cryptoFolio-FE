import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ErrorMessage from '../ErrorMessage';

class SignupBody extends Component {
  render() {
    return (
      <div className="form-div">
        <form className="form-form" onSubmit={(e) => { this.props.submit(e); }}>
          <div className="form-padding">
            <div className="form-heading">
              {this.props.formHeading}
            </div><br />
            {this.props.error ?
              <ErrorMessage message={this.props.error} />
                : ''
              }
          </div>
          <div className="form-children-div">
            {this.props.children}
          </div>
          <div className="form-submit">
            <button
              type="submit"
            >
              {this.props.buttonMessage}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupBody;

SignupBody.defaultProps = {
  children: 'Hello There!',
  error: null,
  submit: null,
  buttonMessage: 'Submit',
  formHeading: 'Form',
};

SignupBody.propTypes = {
  children: PropTypes.array,
  error: PropTypes.string,
  submit: PropTypes.func,
  buttonMessage: PropTypes.string,
  formHeading: PropTypes.string,
};
