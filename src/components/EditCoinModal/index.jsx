import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';


class EditCoinModal extends React.Component {
   onClickUpdate = (e) => {
     e.preventDefault();
     this.props.onClickUpdate(this.props.data);
   };

   render() {
     return (
       <Modal open={this.props.state} onClose={this.props.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(255, 255, 255)', borderRadius: '10px' } }}>
         <h2 className="editCoinModal_header">Edit coin</h2>
         <form className="editCoinModal_editCoinForm">
           <label
             className="editCoinModal_editCoinForm_input_label"
             htmlFor="coinPurchasedPrice"
           >Purchased Price<input
             className="editCoinModal_editCoinForm_input"
             id="coinPurchasedPrice"
             type="number"
             placeholder="Purchased Price"
             value={this.props.data.price}
             name="price"
             onChange={(e) => { this.props.onEditPrice(e); }}
           />
           </label>
           <label
             className="editCoinModal_editCoinForm_input_label"
             htmlFor="coinPurchasedPrice"
           >Quantity<input
             className="editCoinModal_editCoinForm_input"
             id="coinPurchasedPrice"
             type="number"
             placeholder="Quantity"
             value={this.props.data.quantity}
             name="quantity"
             onChange={(e) => { this.props.onEditQuantity(e); }}
           />
           </label>

           <button
             className="editCoinModal_editCoinForm_submit"
             name="Update"
             onClick={e => this.onClickUpdate(e)}
           >
        Submit
           </button>
           <button
             className="editCoinModal_editCoinForm_submit"
             name="RemoveTransaction"
             onClick={data => this.props.onClickDelete(this.props.data)}
           >
        Remove Transaction
           </button>
         </form>
       </Modal>
     );
   }
}

EditCoinModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }).isRequired,
  onEditQuantity: PropTypes.func.isRequired,
  onEditPrice: PropTypes.func.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default EditCoinModal;
