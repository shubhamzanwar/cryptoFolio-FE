import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import PropTypes from 'prop-types';
import './index.css';

class RequestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userSuggestions: [],
      displaySuggestions: false,
      selectedUser: null,
      selectedCoin: '',
      quantity: 0,
      errorMessage: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedCoin: Object.keys(nextProps.validCoins)[0],
    });
  }
  getUserSuggestions(username) {
    this.setState({
      selectedUser: null,
      username,
    });
    axios.get(`/getUsername?username=${username}&curr=${window.localStorage.getItem('cryptousername')}`).then((usernames) => {
      if (username.trim().length === 0 || usernames.data.length === 0) {
        this.setState({
          userSuggestions: [],
          displaySuggestions: false,
        });
        return;
      }
      this.setState({
        userSuggestions: usernames.data,
        displaySuggestions: true,
      });
    });
  }


  setQuantity(quantity) {
    this.setState({
      quantity,
    });
  }
  selectUser(user) {
    this.setState({
      selectedUser: user,
      username: user.fullName,
      displaySuggestions: false,
    });
  }

  selectCoin(e) {
    this.setState({
      selectedCoin: e.target.value,
    });
  }

  request(user, coin, quantity) {
    this.setState({
      errorMessage: '',
    });
    if (user === null || user.fullName === '') {
      return this.setState({
        errorMessage: 'Please enter a valid username',
      });
    } else if (coin === undefined) {
      return this.setState({
        errorMessage: 'Please select a valid coin',
      });
    } else if (quantity <= 0) {
      return this.setState({
        errorMessage: 'Please enter a valid quantity',
      });
    }
    return this.props.request(user, coin, quantity);
  }

  render() {
    return (
      <Modal open={this.props.state} onClose={() => this.props.onCloseModal()} little styles={{ modal: { backgroundColor: 'rgb(14, 39, 89)', borderRadius: '10px', minWidth: '300px' } }} >
        <h2 style={{ color: 'white' }}>Transfer coins</h2>
        {
          this.state.errorMessage !== '' ? (
            <div className="TransferCoins-form-errorMessage">
              {this.state.errorMessage}
            </div>
          ) : null
        }
        <div className="TransferCoins-form">
          <div className="TransferCoins-receiver-name-container">
            <p style={{ width: '100%', marginBottom: 0 }}>
              Requesting from:
              <input
                className="TransferCoins-receiver-name"
                type="text"
                onChange={e => this.getUserSuggestions(e.target.value)}
                value={this.state.username}
                placeholder="Enter your friend's full name"
              />
              <div className={this.state.displaySuggestions ? 'TransferCoins-receiver-name-suggestions show' : 'TransferCoins-receiver-name-suggestions'}>
                {
                this.state.userSuggestions.map(user => (
                  <p
                    key={user.id}
                    className="TransferCoins-user-suggestion"
                    onClick={() => this.selectUser(user)}
                  >
                    {user.fullName}
                    <hr />
                  </p>
                ))
              }
              </div>
            </p>
          </div>
          <p style={{ width: '100%' }}>
            Choose coin:
            <select
              className="TransferCoins-select-coin"
              onChange={e => this.selectCoin(e)}
              value={this.state.selectedCoin}
            >
              {
                Object.values(this.props.validCoins).map(coin => <option value={coin}>{coin}</option>)
              // console.log(this.props.validCoins, typeof (this.props.validCoins))
            }
            </select>
          </p>
          <p style={{ width: '100%' }}>
            Enter Quantity:
            <input
              className="TransferCoins-set-quantity"
              type="number"
              placeholder="Enter the number of coins"
              onChange={e => this.setQuantity(e.target.value)}
              value={this.state.quantity}
            />
          </p>
          <button
            className="TransferCoins-pay-button"
            onClick={() => {
              this.request(this.state.selectedUser, this.state.selectedCoin, this.state.quantity);
            }}
          >
            Request
          </button>
        </div>
      </Modal>
    );
  }
}


RequestModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  validCoins: PropTypes.shape({
    coinName: PropTypes.number.isRequired,
  }),
  request: PropTypes.func.isRequired,
};

RequestModal.defaultProps = {
  validCoins: [],
};

export default RequestModal;
