import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import coins from '../../utils/constants/coins';
import './index.css';

const AddCoinModal = props => (
  <Modal open={props.state} onClose={props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(255, 255, 255)', borderRadius: '10px' } }}>
    <h2 className="addCoinModal_header">{props.modifyType === 'addCoin' ? 'Add Coin' : 'Remove Coin'}</h2>
    <form className="addCoinModal_addCoinForm" onSubmit={(e) => { props.addCoin(e); props.onCloseModal(); }}>
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coindName">Coin Name
        <select className="addCoinModal_addCoinForm_input" name="name">
          {
            coins.map(coin => <option value={coin}>{coin}</option>)
          }
        </select>
      </label>
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">Quantity<input className="addCoinModal_addCoinForm_input" name="quantity" type="number" placeholder="Quantity" /></label>
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">{props.modifyType === 'addCoin' ? 'Purchased Price' : 'Sold Price'}<input className="addCoinModal_addCoinForm_input" name="price" type="number" placeholder={props.modifyType === 'addCoin' ? 'Purchased Price' : 'Sold Price'} /></label>
      <button className="addCoinModal_addCoinForm_submit" type="submit">{props.modifyType === 'addCoin' ? 'Add Coin' : 'Remove Coin'}</button>
    </form>
  </Modal>
);

AddCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  modifyType: PropTypes.string.isRequired,
  addCoin: PropTypes.func.isRequired,
};

AddCoinModal.defaultProps = {
};

export default AddCoinModal;
