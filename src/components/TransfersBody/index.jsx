import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import RequestModal from './RequestModal';
import OTPVerificationModal from './OTPVerificationModal';
import TransfersTable from './TransfersTable';
import './index.css';
import coins from '../../utils/constants/coins';


const summarise = responses => responses.reduce((acc, curr) => {
  acc[curr.coin.symbol] = acc[curr.coin.symbol] || { id: curr.coinId, quantity: 0 };
  if (curr.to.fullName === window.localStorage.getItem('cryptousername')) {
    acc[curr.coin.symbol].quantity += curr.quantity;
  } else {
    acc[curr.coin.symbol].quantity -= curr.quantity;
  }
  return acc;
}, {});

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
      fromFullName: null,
      toId: null,
      validCoins: {},
    };
  }

  componentWillMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === 'false') {
      (this.props.history).push('/login', { message: 'Please login to continue' });
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
          validCoins: summarise(response[0].concat(response[1])),
        });
      }).catch((err) => {
        if (err.message === '401') {
          window.localStorage.setItem('cryptotoken', null);
          window.localStorage.setItem('cryptousername', null);
          window.localStorage.setItem('cryptologgedin', false);
          this.props.history.push('/login', { message: 'Please login to continue' });
        }
      });
  }

  togglePayments() {
    const paymentState = this.state.paymentModal;
    this.setState({
      paymentModal: !paymentState,
    });
  }

  toggleOTP(from, fromFullName, toId, transactionId) {
    const otpState = this.state.otpModal;
    this.setState({
      otpModal: !otpState,
      transactionId,
      from,
      fromFullName,
      toId,
    });
  }

  requestOTP(from, fromFullName, toId, transactionId, quantity, coinSymbol) {
    if (this.state.validCoins[coinSymbol] === undefined) {
      Alert.error('You don\'t have that coin', {
        position: 'top-right',
        effect: 'jelly',
        customFields: {
          button: false,
        },
      });
      return;
    }
    if (this.state.validCoins[coinSymbol].quantity < quantity) {
      Alert.error('You don\'t have enough coins', {
        position: 'top-right',
        effect: 'jelly',
        customFields: {
          button: false,
        },
      });
      return;
    }
    const authtoken = window.localStorage.getItem('cryptotoken');
    fetch('/otp', {
      method: 'PUT',
      headers: { authtoken },
    }).then(() => {
      this.toggleOTP(from, fromFullName, toId, transactionId);
    });
  }

  approve(otp, userID, fromFullName, toId, transactionId) {
    const payload = {
      fromName: fromFullName,
      toId,
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
        Alert.error('Invalid OTP', {
          position: 'top-right',
          effect: 'jelly',
          customFields: {
            button: false,
          },
        });
      } else {
        Alert.success('Transaction complete', {
          position: 'top-right',
          effect: 'jelly',
          customFields: {
            button: false,
          },
        });
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
        });
      });
  }
  decline(user, transactionId, fromFullName, toId) {
    const payload = {
      fromId: user.id,
      transactionId,
      fromName: fromFullName,
      toId,
      status: 2,
    };
    fetch('/transfer', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('cryptotoken') },
    }).then(() => {
      Alert.info('Request Rejected', {
        position: 'top-right',
        effect: 'jelly',
        customFields: {
          button: false,
        },
      });
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
          fromFullName={this.state.fromFullName}
          toId={this.state.toId}
          approve={(otp, fromId, fromFullName, toId, transactionId) => this.approve(otp, fromId, fromFullName, toId, transactionId)}
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
              decline={(user, transactionId, fullName, toId) => this.decline(user, transactionId, fullName, toId)}
              transfers={this.state.requestToMe}
              requestOTP={(from, fromFullName, toId, transactionId, quantity, coinSymbol) => { this.requestOTP(from, fromFullName, toId, transactionId, quantity, coinSymbol); }}
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
