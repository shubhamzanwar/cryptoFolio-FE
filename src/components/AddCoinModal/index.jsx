import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';

const AddCoinModal = props => (
  <Modal open={props.state} onClose={props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(0, 164, 236)' } }}>
    <h2>Add coin</h2>
    <form className="addCoinModal_addCoinForm">
      <input className="addCoinModal_addCoinForm_input" type="text" placeholder="Coin Name" /><br />
      <input className="addCoinModal_addCoinForm_input" type="text" placeholder="Quantity" /><br />
      <input className="addCoinModal_addCoinForm_input" type="text" placeholder="Purchased Price" /><br />
      <button className="addCoinModal_addCoinForm_submit" type="submit">Add Coin</button>
    </form>
  </Modal>
);

AddCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

AddCoinModal.defaultProps = {
};

export default AddCoinModal;
