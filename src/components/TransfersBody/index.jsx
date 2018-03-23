import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SendModal from './SendModal/';
import RequestModal from './RequestModal/';
import OTPVerificationModal from './OTPVerificationModal';
import TransfersTable from './TransfersTable';
import './index.css';
import coins from '../../utils/constants/coins';

// const summarise = responses => responses.reduce((acc, curr) => {
//   acc[curr.coin.symbol] = acc[curr.coin.symbol] || { id: curr.coinId, quantity: 0 };
//   if (curr.to.fullName === window.localStorage.getItem('cryptousername')) {
//     acc[curr.coin.symbol].quantity += curr.quantity;
//   } else {
//     acc[curr.coin.symbol].quantity -= curr.quantity;
//   }
//   return acc;
// }, {});

class TransfersBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentModal: false,
      otpModal: false,
      sent: [],
      received: [],
      requestToMe: [],
      requestedByMe: [],
      coins: {},
      transactionId: null,
      from: null,
    };
  }

  componentWillMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === 'false') {
      (this.props.history).push('/login');
    }
    this.fetchTransactions();
  }

  fetchTransactions() {
    const authtoken = window.localStorage.getItem('cryptotoken');
    fetch('/transfer', {
      method: 'GET',
      headers: { authtoken },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw new Error(401);
        }
        return resp.json();
      })
      .then((response) => {
        this.setState({
          sent: response[0],
          received: response[1],
          requestToMe: response[2],
          requestedByMe: response[3],
          coins,
        });
      }).catch((err) => {
        if (err.message === '401') {
          window.localStorage.setItem('cryptotoken', null);
          window.localStorage.setItem('cryptousername', null);
          window.localStorage.setItem('cryptologgedin', false);
          this.props.history.push('/');
        }
      });
  }

  togglePayments() {
    const paymentState = this.state.paymentModal;
    this.setState({
      paymentModal: !paymentState,
    });
  }

  toggleOTP(from, transactionId) {
    const otpState = this.state.otpModal;
    this.setState({
      otpModal: !otpState,
      transactionId,
      from,
    });
  }

  requestOTP(from, transactionId) {
    const authtoken = window.localStorage.getItem('cryptotoken');
    fetch('/otp', {
      method: 'PUT',
      headers: { authtoken },
    }).then(() => {
      this.toggleOTP(from, transactionId);
    });
  }

  approve(otp, userID, transactionId) {
    const payload = {
      fromId: userID,
      transactionId,
      status: 0,
      otp,
    };
    fetch('/transfer', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('cryptotoken') },
    }).then((result) => {
      if (result.status === 403) {
        alert('Invalid OTP');
      } else {
        alert('Transfer Successful');
        this.setState({ otpModal: false });
        this.fetchTransactions();
      }
    });
  }

  request(user, coin, quantity) {
    const payload = {
      fromId: user.id,
      coinId: coin,
      quantity,
    };
    fetch('/request', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('cryptotoken') },
    })
      .then(() => {
        const { coins } = this.state;
        // coins[coin] = {
        //   id: payload.coinId,
        //   quantity: this.state.coins[coin].quantity - quantity,
        // };
        this.setState({
          paymentModal: false,
          requestedByMe: [...this.state.requestedByMe, {
            from: {
              fullName: user.fullName,
            },
            to: {
              id: 0,
            },
            coin: {
              symbol: coin,
            },
            quantity,
          }],
          coins: {
            ...coins,
          },
        });
      });
  }

  decline(user, transactionId) {
    const payload = {
      fromId: user.id,
      transactionId,
      status: 2,
    };
    fetch('/transfer', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('cryptotoken') },
    }).then(() => {
      this.fetchTransactions();
    });
  }

  render() {
    return (
      <div className="TransfersBody">
        <RequestModal
          state={this.state.paymentModal}
          onCloseModal={() => this.togglePayments()}
          validCoins={this.state.coins}
          request={(userId, coin, quantity) => this.request(userId, coin, quantity)}
        />
        <OTPVerificationModal
          state={this.state.otpModal}
          onCloseModal={() => this.toggleOTP()}
          transactionId={this.state.transactionId}
          fromId={this.state.from}
          approve={(otp, fromId, transactionId) => this.approve(otp, fromId, transactionId)}
        />
        <div className="TransfersBody-make-transfer">
          <h3 className="TransfersBody-make-transfer-heading">
            You have {(this.state.sent.length + this.state.received.length) || 'no'} transaction{(this.state.sent.length + this.state.received.length) > 0 ? 's' : ''}
          </h3>
          <button
            onClick={() => this.togglePayments()}
            className="TransfersBody-make-transfer-button"
          >
            Request Payment
          </button>
        </div>
        <div className="TransferBody-transfers">
          {
            (this.state.sent.length > 0) ? <TransfersTable transfers={this.state.sent} type="sent" /> : ''
          }
          {
            (this.state.received.length > 0) ? <TransfersTable transfers={this.state.received} type="received" /> : ''
          }
          {
            (this.state.requestToMe.length > 0) ? <TransfersTable
              decline={(user, transactionId) => this.decline(user, transactionId)}
              transfers={this.state.requestToMe}
              // toggleOTP={transactionId => this.toggleOTP(transactionId)}
              requestOTP={(from, transactionId) => { this.requestOTP(from, transactionId); }}
              type="requestToMe"
            /> : ''
          }
          {
            (this.state.requestedByMe.length > 0) ? <TransfersTable transfers={this.state.requestedByMe} type="requestedByMe" /> : ''
          }
        </div>
      </div>
    );
  }
}

TransfersBody.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default TransfersBody;
