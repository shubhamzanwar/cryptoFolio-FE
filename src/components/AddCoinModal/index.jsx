import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';

const AddCoinModel = props => (
  <Modal open={props.state} onClose={props.onCloseModal} little>
    <h2>Add coin</h2>
    <form>
      <input type="text" placeholder="Coin Name" /><br />
      <input type="text" placeholder="Quantity" /><br />
      <input type="text" placeholder="Purchased Price" /><br />
      <button type="submit">Add Coin</button>
    </form>
  </Modal>
);

AddCoinModel.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

AddCoinModel.defaultProps = {
};

export default AddCoinModel;
