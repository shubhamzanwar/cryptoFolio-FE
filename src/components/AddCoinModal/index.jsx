import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import coins from '../../utils/constants/coins';
import './index.css';


class AddCoinModal extends React.Component {
  onSubmit = (e) => {
    if (this.props.modifyType === 'addCoin') {
      this.props.addCoin(e);
    } else { this.props.removeCoin(e); }
  };
  render=() => (
    <Modal open={this.props.state} onClose={this.props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(255, 255, 255)', borderRadius: '10px' } }}>
      <h2 className="addCoinModal_header">{this.props.modifyType === 'addCoin' ? 'Add Coin' : 'Remove Coin'}</h2>
      <form className="addCoinModal_addCoinForm" onSubmit={e => this.onSubmit(e)}>
        <label className="addCoinModal_addCoinForm_input_label" htmlFor="coindName">Coin Name
          <select className="addCoinModal_addCoinForm_input" name="name">
            {
            coins.map(coin => <option value={coin}>{coin}</option>)
          }
          </select>
        </label>
        <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">Quantity<input className="addCoinModal_addCoinForm_input" name="quantity" type="number" placeholder="Quantity" /></label>
        <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">{this.props.modifyType === 'addCoin' ? 'Purchased Price' : 'Sold Price'}<input className="addCoinModal_addCoinForm_input" name="price" type="number" placeholder={this.props.modifyType === 'addCoin' ? 'Purchased Price' : 'Sold Price'} /></label>
        <p>{this.props.response}</p>
        <button className="addCoinModal_addCoinForm_submit" type="submit">{this.props.modifyType === 'addCoin' ? 'Add Coin' : 'Remove Coin'}</button>
      </form>
    </Modal>
  )
}
AddCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  modifyType: PropTypes.string.isRequired,
  addCoin: PropTypes.func.isRequired,
  removeCoin: PropTypes.func.isRequired,
  response: PropTypes.string.isRequired,
};

AddCoinModal.defaultProps = {
};

export default AddCoinModal;
