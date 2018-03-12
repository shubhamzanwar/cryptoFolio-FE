import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';

const EditCoinModal = props => (
  <Modal open={props.state} onClose={props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(255, 255, 255)', borderRadius: '10px' } }}>
    <h2 className="editCoinModal_header">Edit coin</h2>
    <form className="editCoinModal_editCoinForm">
      <label className="editCoinModal_editCoinForm_input_label" htmlFor="coindName">Coin Name<input className="editCoinModal_editCoinForm_input" id="coindName" type="text" placeholder="Coin Name" value={props.data.name} /></label>
      <label className="editCoinModal_editCoinForm_input_label" htmlFor="coinPurchasedPrice">Quantity<input className="editCoinModal_editCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Quantity" value={props.data.quantity} /></label>
      <label className="editCoinModal_editCoinForm_input_label" htmlFor="coinPurchasedPrice">Purchased Price<input className="editCoinModal_editCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Purchased Price" value={props.data.price} /></label>
      <button className="editCoinModal_editCoinForm_submit" type="submit">Update</button>
      <button className="editCoinModal_editCoinForm_submit" type="submit">Remove Transaction</button>
    </form>
  </Modal>
);

EditCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditCoinModal;
