import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import AddCoinModal from './../AddCoinModal';
import EditCoinListModal from './../EditCoinListModal';
import groupTransactionsByCoin from '../../utils/helpers/groupTransactionsByCoin';
import summarizeTransactions from '../../utils/helpers/summarizeTransactions';
import totalCurrentPortfolioValue from '../../utils/helpers/totalCurrentPortfolioValue';
import './index.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.fetchCurrentPrice();
    this.state = {
      userTransactions: {},
      addModal: false,
      editModal: false,
      modifyType: 'addCoin',
      editingCoin: 'BTC',
      response: '',
      currentValues: [],
    };
  }
  componentDidMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === false) {
      (this.props.history).push('/login', { message: 'Please login to continue' });
    } else {
      const authtoken = window.localStorage.getItem('cryptotoken');
      fetch('/portfolio', {
        method: 'GET',
        headers: { authtoken },
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(401);
          }
          return response.json();
        })
        .then((response) => {
          this.setState({
            userTransactions: groupTransactionsByCoin(response),
          });
        }).catch((err) => {
          if (err.message === 'Token Expired') {
            window.localStorage.setItem('cryptotoken', null);
            window.localStorage.setItem('cryptousername', null);
            window.localStorage.setItem('cryptologgedin', false);
            this.props.history.push('/login', { message: 'Session Expired! Please re-login' });
          }
        });
      this.fetchPortfolioData();
    }
    setInterval(this.fetchCurrentPrice, 10000);
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

  fetchPortfolioData = () => {
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

  addCoin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const quantity = data.get('quantity');
    if (quantity > 0 && data.get('price') > 0) {
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
    } else {
      this.setState({
        response: 'Enter valid quantity and price',
      });
    }
  }
  removeCoin(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const coin = data.get('name');
    let quantity = data.get('quantity');
    const price = data.get('price');
    const transactions = summarizeTransactions(this.state.userTransactions)[0];
    const groupedTransactions = groupTransactionsByCoin(transactions);
    if (quantity > 0 && price > 0) {
      if (groupedTransactions[coin] && groupedTransactions[coin][0].quantity >= (quantity)) {
        quantity *= -1;
        const payload = {
          coin,
          quantity,
          price,
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
          response: 'Please re-enter since the quantity exceeds the existing quantity',
        });
      } else {
        this.setState({
          response: 'You do not have the coin in your portfolio',
        });
      }
    } else {
      this.setState({
        response: 'Enter valid quantity and price',
      });
    }
  }
  fetchCurrentPrice = () => {
    const object = {};
    fetch('/prices')
      .then(result => result.json())
      .then(priceData => priceData.forEach((coin) => {
        object[coin.Symbol] = coin.Price;
      }))
      .then(() => {
        this.setState({
          currentValues: object,
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
            sold={summarizeTransactions(this.state.userTransactions)[2]}
            currentValue={totalCurrentPortfolioValue(this.state.currentValues, summarizeTransactions(this.state.userTransactions)[0])}
          />
          <MyCoins
            userTransactions={summarizeTransactions(this.state.userTransactions)[0]}
            currentValues={this.state.currentValues}
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
