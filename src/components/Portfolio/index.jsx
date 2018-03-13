import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import AddCoinModal from './../AddCoinModal';
import EditCoinListModal from './../EditCoinListModal';
import './index.css';

const groupByCoin = transactions => transactions.reduce((acc, curr) => {
  acc[curr.coinSymbol] = acc[curr.coinSymbol] || [];
  acc[curr.coinSymbol].push(curr);
  return acc;
}, {});

const summarize = (transactionsObject) => {
  let totalInvested = 0;
  const transactions = Object.values(transactionsObject).map((coinTransactions) => {
    const { coinName } = coinTransactions[0];
    const { coinSymbol } = coinTransactions[0];
    let quantity = 0;
    let invested = 0;

    coinTransactions.forEach((transaction) => {
      quantity += transaction.quantity;
      invested += transaction.quantity * transaction.price;
    });
    totalInvested += invested;
    return {
      coinName,
      coinSymbol,
      quantity,
      invested,
    };
  });
  return [transactions, totalInvested];
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTransactions: {},
      addModal: false,
      editModal: false,
      modifyType: 'addCoin',
      editingCoin: 'BTC',
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
        .then((response) => {
          if (response.status !== 200) {
            throw new Error({ code: response.status, msg: response });
          }
          return response.json();
        })
        .then((response) => {
          this.setState({
            userTransactions: groupByCoin(response),
          });
        }).catch((err) => {
          if (err.code === 401) {
            window.localStorage.setItem('cryptotoken', null);
            window.localStorage.setItem('cryptousername', null);
            window.localStorage.setItem('cryptologgedin', false);
            this.props.history.push('/');
          }
        });
    }
  }

  onOpenAddModal = () => {
    this.setState({ addModal: true, modifyType: 'addCoin' });
  };

  onOpenRemoveModal = () => {
    this.setState({ addModal: true, modifyType: 'removeCoin' });
  };

  onCloseAddModal = () => {
    this.setState({ addModal: false });
  };

  onOpenEditModal = (coin) => {
    this.setState({ editModal: true, editingCoin: coin });
  };


  onCloseEditModal = () => {
    this.setState({ editModal: false });
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
      .then((result) => {
        if (result.status === 201) {
          return result.json();
        }
        return null;
      })
      .then((result) => {
        const trans = this.state.userTransactions;
        trans[payload.coin] = trans[payload.coin] || [];
        trans[payload.coin].push({ ...result, coinSymbol: payload.coin });
        this.setState({
          userTransactions: trans,
        });
      });
  }


  render() {
    return (
      <div className="Portfolio">
        <AddCoinModal
          state={this.state.addModal}
          modifyType={this.state.modifyType}
          onCloseModal={this.onCloseAddModal}
          addCoin={(e) => { this.addCoin(e); }}
        />
        <EditCoinListModal
          state={this.state.editModal}
          onCloseModal={this.onCloseEditModal}
          coinName={this.state.editingCoin}
          transactions={this.state.userTransactions[this.state.editingCoin]}
        />
        <div className="Portfolio-Left-Container">
          <Investment
            invested={summarize(this.state.userTransactions)[1]}
            currentValue={this.state.currentValue}
          />
          <MyCoins
            userTransactions={summarize(this.state.userTransactions)[0]}
            addCoin={() => this.onOpenAddModal()}
            editCoin={coin => this.onOpenEditModal(coin)}
            removeCoin={() => this.onOpenRemoveModal()}
          />
        </div>
        <div className="Portfolio-Right-Container">
          <PortfolioDistribution
            userTransactions={summarize(this.state.userTransactions)[0]}
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
