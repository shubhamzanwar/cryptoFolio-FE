import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
// import axios from 'axios';
import PropTypes from 'prop-types';
import './index.css';

class OTPVerificationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }

  setOTP(otp) {
    this.setState({
      otp,
    });
  }

  render() {
    return (
      <Modal open={this.props.state} onClose={() => this.props.onCloseModal()} little styles={{ modal: { backgroundColor: 'rgb(14, 39, 89)', borderRadius: '10px', minWidth: '300px' } }} >
        <h2 style={{ color: 'white' }}>OTP Authentication</h2>
        <div className="TransferCoins-form">
          <div className="TransferCoins-receiver-name-container">
            <p style={{ width: '100%', marginBottom: 0 }}>
              Enter OTP
              <input
                className="TransferCoins-receiver-name"
                type="text"
                placeholder="Enter your OTP"
                onChange={e => this.setOTP(e.target.value)}
                value={this.state.otp}
              />
            </p>
          </div>
          <button
            className="TransferCoins-pay-button"
            onClick={() => {
              this.props.approve(this.state.otp, this.props.fromId, this.props.fromFullName, this.props.toId, this.props.transactionId);
            }}
          >
            Verify
          </button>
        </div>
      </Modal>
    );
  }
}


OTPVerificationModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  fromId: PropTypes.number.isRequired,
  fromFullName: PropTypes.string.isRequired,
  toId: PropTypes.number.isRequired,
  transactionId: PropTypes.number.isRequired,
  approve: PropTypes.func.isRequired,
};

OTPVerificationModal.defaultProps = {

};

export default OTPVerificationModal;
