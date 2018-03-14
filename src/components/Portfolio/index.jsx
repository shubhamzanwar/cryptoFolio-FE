import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import AddCoinModal from './../AddCoinModal';
import EditCoinListModal from './../EditCoinListModal';
import groupTransactionsByCoin from '../../utils/helpers/groupTransactionsByCoin';
import summarizeTransactions from '../../utils/helpers/summarizeTransactions';
import './index.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTransactions: {},
      addModal: false,
      editModal: false,
      modifyType: 'addCoin',
      editingCoin: 'BTC',
      response: '',
    };
  }
  componentDidMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === false) {
      (this.props.history).push('/login', { message: 'Please login to continue' });
    } else {
      this.fetchPortfolioData();
    }
  }
  onClickUpdate = (data) => {
    fetch(`/editTransaction?edit=${data.transactionId}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        authtoken: window.localStorage.getItem('cryptotoken'),
      },
    }).then(() => {
      this.fetchPortfolioData();
    });
  }
  onClickDelete = (data) => {
    fetch(`/editTransaction?delete=${data.transactionId}`, {
      method: 'POST',
      headers: {
        authtoken: window.localStorage.getItem('cryptotoken'),
      },
    }).then(() => {
      this.fetchPortfolioData();
    });
  }


  onOpenAddModal = () => {
    this.setState({ addModal: true, modifyType: 'addCoin' });
  };

  onOpenRemoveModal = () => {
    this.setState({ addModal: true, modifyType: 'removeCoin' });
  };

  onCloseAddModal = () => {
    this.setState({ addModal: false, response: '' });
  };

  onOpenEditModal = (coin) => {
    this.setState({ editModal: true, editingCoin: coin });
  };


  onCloseEditModal = () => {
    this.setState({ editModal: false });
  }

  fetchPortfolioData=() => {
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
          userTransactions: groupTransactionsByCoin(response),
        });
      }).catch((err) => {
        if (err.code === 401) {
          window.localStorage.setItem('cryptotoken', null);
          window.localStorage.setItem('cryptousername', null);
          window.localStorage.setItem('cryptologgedin', false);
          this.forceUpdate();
          this.props.history.push('/login', { message: 'Please login to continue' });
        }
      });
  }


  addCoin(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {
      coin: data.get('name'),
      quantity: data.get('quantity'),
      price: data.get('price'),
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
        this.onCloseAddModal();
        this.setState({
          userTransactions: trans,
        });
      });
  }
  removeCoin(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const coin = data.get('name');
    let quantity = data.get('quantity');
    const transactions = summarizeTransactions(this.state.userTransactions)[0];
    const groupedTransactions = groupTransactionsByCoin(transactions);
    if (groupedTransactions[coin] && groupedTransactions[coin][0].quantity >= (quantity)) {
      quantity *= -1;
      const payload = {
        coin: data.get('name'),
        price: data.get('price'),
        quantity,
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
            response: '',
          });
          this.onCloseAddModal();
        });
    } else if (groupedTransactions[coin]) {
      this.setState({
        response: 'Please re-enter since the quantity exceeds the added quantity',
      });
    } else {
      this.setState({
        response: 'You do not have the coin in your portfolio',
      });
    }
  }

  render() {
    return (
      <div className="Portfolio">
        <AddCoinModal
          state={this.state.addModal}
          modifyType={this.state.modifyType}
          onCloseModal={this.onCloseAddModal}
          addCoin={(e) => { this.addCoin(e); }}
          removeCoin={(e) => { this.removeCoin(e); }}
          response={this.state.response}
        />
        <EditCoinListModal
          state={this.state.editModal}
          onCloseModal={this.onCloseEditModal}
          coinName={this.state.editingCoin}
          transactions={this.state.userTransactions[this.state.editingCoin]}
          onClickUpdate={data => this.onClickUpdate(data)}
          onClickDelete={data => this.onClickDelete(data)}
        />
        <div className="Portfolio-Left-Container">
          <Investment
            invested={summarizeTransactions(this.state.userTransactions)[1]}
            currentValue={this.state.currentValue}
          />
          <MyCoins
            userTransactions={summarizeTransactions(this.state.userTransactions)[0]}
            addCoin={() => this.onOpenAddModal()}
            editCoin={coin => this.onOpenEditModal(coin)}
            removeCoin={() => this.onOpenRemoveModal()}
          />
        </div>
        <div className="Portfolio-Right-Container">
          <PortfolioDistribution
            userTransactions={summarizeTransactions(this.state.userTransactions)[0]}
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
