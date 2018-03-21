import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendModal from './SendModal/';
import TransfersTable from './TransfersTable';
import './index.css';

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
      sent: [],
      received: [],
      coins: {},
    };
  }

  componentWillMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === 'false') {
      (this.props.history).push('/login');
    }
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
          coins: summarise(response[0].concat(response[1])),
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
  pay(user, coin, quantity) {
    const payload = {
      toId: user.id,
      coinId: this.state.coins[coin].id,
      quantity,
    };
    fetch('/transfer', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('cryptotoken') },
    })
      .then(() => {
        const { coins } = this.state;
        coins[coin] = {
          id: payload.coinId,
          quantity: this.state.coins[coin].quantity - quantity,
        };
        this.setState({
          paymentModal: false,
          sent: [...this.state.sent, {
            to: {
              fullName: user.fullName,
            },
            from: {
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
  render() {
    return (
      <div className="TransfersBody">
        <SendModal
          state={this.state.paymentModal}
          onCloseModal={() => this.togglePayments()}
          validCoins={this.state.coins}
          pay={(userId, coin, quantity) => this.pay(userId, coin, quantity)}
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
