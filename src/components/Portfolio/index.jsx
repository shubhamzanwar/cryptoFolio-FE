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
  console.log(transactions);
  return transactions;
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTransactions: {},
    };
  }
  componentWillMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === 'false') {
      (this.props.history).push('/login');
    }
  }
  componentDidMount() {
    const authtoken = window.localStorage.getItem('cryptotoken');
    fetch('/portfolio', {
      method: 'GET',
      headers: { authtoken },
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          userTransactions: groupByCoin(response),
        });
      });
  }
  addCoin(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
      coin: data.get('name'),
      price: data.get('quantity'),
      quantity: data.get('price'),
    };
    fetch('/editPortfolioCoin', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('cryptotoken') },
    })
      // .then(result => result.json())
      .then((result) => {
        if (result.status === 201) {
          return result.json();
        }
        return null;
      })
      .then((result) => {
        console.log(result);
        const trans = this.state.userTransactions;
        trans[payload.coin].push(result);
        this.setState({
          userTransactions: trans,
          // userTransactions: this.state.userTransactions[payload.coin].push({
          //   coinName: ,
          //   coinSymbol: 'BTC',
          //   currentPrice: payload.price,
          //   fromId: 1,
          //   id: 1,
          //   price: payload.price,
          //   quantity: payload.quantity,
          //   toId: 2,
          // }),
        });
      });
  }
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio-Left-Container">
          <Investment />
          <MyCoins
            userTransactions={summarize(this.state.userTransactions)}
            addCoin={(e) => { this.addCoin(e); }}
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
