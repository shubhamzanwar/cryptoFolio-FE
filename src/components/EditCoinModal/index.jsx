import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './index.css';


class EditCoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      price: 0,
      quantity: 0,
    };
  }
  onEditPrice=(e) => {
    const { value } = e.target;
    this.setState({
      price: value,
    });
  }
  onEditQuantity=(e) => {
    const { value } = e.target;
    this.setState({
      quantity: value,
    });
  }
   onClickUpdate = (e) => {
     e.preventDefault();
     let { quantity } = this.state;
     let { price } = this.state;
     if (!quantity) {
       quantity = this.props.data.quantity;
     }
     if (!price) {
       price = this.props.data.price;
     }
     if (quantity && price) {
       if (price > 0 && quantity > 0) {
         const { data } = this.props;
         data.quantity = quantity;
         data.price = price;
         this.props.onClickUpdate(data);
         this.props.onEditPrice(price);
         this.props.onEditQuantity(quantity);
         this.setState({
           status: '',
         });
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
   onCloseModal=() => {
     this.forceUpdate();
     this.props.onCloseModal();
   }

   render() {
     return (
       <Modal open={this.props.state} onClose={this.onCloseModal} little styles={{ modal: { backgroundColor: 'rgb(255, 255, 255)', borderRadius: '10px' } }}>
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
             placeholder={this.props.data.price}

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
             placeholder={this.props.data.quantity}

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
