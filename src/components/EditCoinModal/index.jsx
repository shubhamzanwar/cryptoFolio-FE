import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';


class EditCoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      price: this.props.data.price,
      quantity: this.props.data.quantity,
    };
  }
  onEditPrice=(e) => {
    const { value } = e.target;
    if (value > 0) {
      this.props.onEditPrice(e);
      this.setState({
        status: '',
        price: value,
      });
    } else if (value === '') {
      this.setState({
        status: '',
        price: value,
      });
    } else {
      this.setState({
        status: 'Please enter valid price',
      });
    }
  }
  onEditQuantity=(e) => {
    const { value } = e.target;
    if (value > 0) {
      this.props.onEditQuantity(e);
      this.setState({
        status: '',
        quantity: value,
      });
    } else if (value === '') {
      this.setState({
        status: '',
        quantity: value,
      });
    } else {
      this.setState({
        status: 'Please enter valid quantity',
      });
    }
  }
   onClickUpdate = (e) => {
     e.preventDefault();
     if (this.state.quantity && this.state.price) {
       if (this.state.price > 0 && this.state.quantity > 0) {
         this.props.onClickUpdate(this.props.data);
       } else {
         this.setState({
           status: 'Please enter valid price and quantity',
         });
       }
     } else {
       this.setState({
         status: 'Please enter the price and quantity',
       });
     }
   };
   onClickDelete = (e) => {
     e.preventDefault();
     this.props.onClickDelete(this.props.data);
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
             required
             className="editCoinModal_editCoinForm_input"
             id="coinPurchasedPrice"
             type="number"
             step="any"
             placeholder="Purchased Price"
             value={this.state.price}
             name="price"
             onChange={(e) => { this.onEditPrice(e); }}
           />
           </label>
           <label
             className="editCoinModal_editCoinForm_input_label"
             htmlFor="coinPurchasedPrice"
           >Quantity<input
             required
             className="editCoinModal_editCoinForm_input"
             id="coinPurchasedPrice"
             type="number"
             placeholder="Quantity"
             value={this.state.quantity}
             name="quantity"
             step="any"
             onChange={(e) => { this.onEditQuantity(e); }}
           />
           </label>
           <p>{this.state.status}</p>
           <button
             className="editCoinModal_editCoinForm_submit"
             name="Update"
             type="submit"
             onClick={e => this.onClickUpdate(e)}
           >
        Submit
           </button>
           <button
             className="editCoinModal_editCoinForm_submit"
             name="RemoveTransaction"
             onClick={e => this.onClickDelete(e)}
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
