import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';

const AddCoinModal = props => (
  <Modal open={props.state} onClose={props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(0, 164, 236)' } }}>
    <h2>{props.modifyType === 'addCoin' ? 'Add Coin' : 'Remove Coin'}</h2>
    <form className="addCoinModal_addCoinForm">
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coindName">Coin Name<input className="addCoinModal_addCoinForm_input" id="coindName" type="text" placeholder="Coin Name" /></label><br />
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">Quantity<input className="addCoinModal_addCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Quantity" /></label><br />
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">Purchased Price<input className="addCoinModal_addCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Purchased Price" /></label><br />
      <button className="addCoinModal_addCoinForm_submit" type="submit">Add Coin</button>
    </form>
  </Modal>
);

AddCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  modifyType: PropTypes.string.isRequired,
};

AddCoinModal.defaultProps = {
};

export default AddCoinModal;
