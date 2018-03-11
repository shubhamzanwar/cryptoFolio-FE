import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';

const AddCoinModal = props => (
  <Modal open={props.state} onClose={props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(0, 164, 236)' } }}>
    <h2>Add coin</h2>
    <form className="addCoinModal_addCoinForm">
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coindName">Coin Name<input className="addCoinModal_addCoinForm_input" id="coindName" type="text" placeholder="Coin Name" /></label><br />
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">Quantity<input className="addCoinModal_addCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Quantity" /></label><br />
      <label className="addCoinModal_addCoinForm_input_label" htmlFor="coinPurchasedPrice">Purchased Price<input className="addCoinModal_addCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Purchased Price" /></label><br />
      <button className="addCoinModal_addCoinForm_submit" type="submit">Add Coin</button>
    </form>g
  </Modal>
);

AddCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

AddCoinModal.defaultProps = {
};

export default AddCoinModal;
