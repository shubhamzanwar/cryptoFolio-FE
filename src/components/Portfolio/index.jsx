import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import './index.css';

const groupByCoin = transactions => transactions.reduce((acc, curr) => {
  acc[curr.coinSymbol] = acc[curr.coinSymbol] || [];
  acc[curr.coinSymbol].push(curr);
  return acc;
}, {});

const summarize = (transactionsObject) => {
  const transactions = Object.values(transactionsObject).map((coinTransactions) => {
    const { coinName } = coinTransactions[0];
    const { coinSymbol } = coinTransactions[0];
    let quantity = 0;
    let invested = 0;

    coinTransactions.forEach((transaction) => {
      quantity += transaction.quantity;
      invested += transaction.quantity * transaction.price;
    });
    return {
      coinName,
      coinSymbol,
      quantity,
      invested,
    };
  });
  return transactions;
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTransactions: {},
    };
  }
  componentDidMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === 'false') {
      (this.props.history).push('/login');
    } else {
      const authtoken = window.localStorage.getItem('cryptotoken');
      fetch('/portfolio', {
        method: 'GET',
        headers: { authtoken },
      })
        .then(response => response.json())
        .then((response) => {
          if (response.message === 'Token Expired') {
            window.localStorage.setItem('cryptologgedin', false);
            window.localStorage.setItem('cryptotoken', null);
            window.localStorage.setItem('cryptousername', null);
            this.forceUpdate();
            this.props.history.push('/login', { message: 'Please login to continue' });
          } else {
            this.setState({
              userTransactions: groupByCoin(response),
            });
          }
        });
    }
  }
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio-Left-Container">
          <Investment />
          <MyCoins
            userTransactions={summarize(this.state.userTransactions)}
            allTransactions={this.state.userTransactions}
            addCoin={(e, type) => { this.addCoin(e, type); }}
          />
        </div>
        <div className="Portfolio-Right-Container">
          <PortfolioDistribution userTransactions={summarize(this.state.userTransactions)} />
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Portfolio;
