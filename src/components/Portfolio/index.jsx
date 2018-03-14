import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import summarize from '../../utils/helpers/summarizeCoins';
import groupByCoin from '../../utils/helpers/groupByCoins';
import logout from '../../utils/helpers/logout';
import './index.css';

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
      (this.props.history).push('/login', { message: 'Please login to continue' });
    } else {
      const authtoken = window.localStorage.getItem('cryptotoken');
      fetch('/portfolio', {
        method: 'GET',
        headers: { authtoken },
      })
        .then(response => response.json())
        .then((response) => {
          if (response.message === 'Token Expired') {
            logout();
            this.props.history.push('/login', { message: 'Please login to continue' });
          } else {
            this.setState({
              userTransactions: groupByCoin(response),
            });
          }
        });
    }
  }
  addCoin(e, type) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
      coin: data.get('name'),
      price: type === 'addCoin' ? data.get('quantity') : -1 * data.get('quantity'),
      quantity: data.get('price'),
    };
    if (type === 'removeCoin' && this.state.userTransactions[payload.coin] !== undefined) {
      const transactionSummary = summarize(this.state.userTransactions[payload.coin]);
      console.log(transactionSummary);
      // if (transactionSummary) {}
    }
    fetch('/editPortfolioCoin', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { authtoken: window.localStorage.getItem('cryptotoken') },
    })
      .then((result) => {
        if (result.status === 201) {
          return result.json();
        }
        return null;
      })
      .then((result) => {
        const trans = this.state.userTransactions;
        trans[payload.coin].push(result);
        this.setState({
          userTransactions: trans,
        });
      });
  }
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio-Left-Container">
          <Investment
            userTransactions={summarize(this.state.userTransactions)}
          />
          <MyCoins
            userTransactions={summarize(this.state.userTransactions)}
            allTransactions={this.state.userTransactions}
            addCoin={(e, type) => { this.addCoin(e, type); }}
          />
        </div>
        <div className="Portfolio-Right-Container">
          <PortfolioDistribution
            userTransactions={summarize(this.state.userTransactions)}
          />
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
