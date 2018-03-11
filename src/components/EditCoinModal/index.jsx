import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';

const EditCoinModal = props => (
  <Modal open={props.state} onClose={props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(0, 164, 236)' } }}>
    <h2>Edit coin</h2>
    <form className="editCoinModal_editCoinForm">
      <label className="editCoinModal_editCoinForm_input_label" htmlFor="coindName">Coin Name<input className="editCoinModal_editCoinForm_input" id="coindName" type="text" placeholder="Coin Name" /></label><br />
      <label className="editCoinModal_editCoinForm_input_label" htmlFor="coinPurchasedPrice">Quantity<input className="editCoinModal_editCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Quantity" /></label><br />
      <label className="editCoinModal_editCoinForm_input_label" htmlFor="coinPurchasedPrice">Purchased Price<input className="editCoinModal_editCoinForm_input" id="coinPurchasedPrice" type="number" placeholder="Purchased Price" /></label><br />
      <button className="addCoinModal_addCoinForm_submit" type="submit">Update</button>
    </form>
  </Modal>
);

EditCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

EditCoinModal.defaultProps = {
};

export default EditCoinModal;
