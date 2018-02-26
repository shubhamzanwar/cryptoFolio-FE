import React from 'react';
import PropTypes from 'prop-types';
import books from '../../helpers/books';
import './index.css';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    console.log('hi');
    const dataPromise = books(this.props.coin);
    dataPromise.then((dataForCoin) => {
      console.log(dataForCoin);
      this.setState({
        data: dataForCoin,
      });
    });
  }
  render() {
    if (Object.keys(this.state.data).length === 0) {
      return <p>Loading</p>;
    }
    console.log(this.state.data);
    const dataToBeRendered = this.state.data[this.props.keys];
    const table = dataToBeRendered.map(row =>
      (
        <tr className="Orders-row-tr">
          <td className="Orders-row-td">{row.price}</td>
          <td className="Orders-row-td">{row.quantity}</td>
          <td className="Orders-row-td">{row.total}</td>
        </tr>
      ));
    return (
      <div className="Orders-div">
        <h3 className="Orders-title">{this.props.title}</h3>
        <div className="Orders-table-wrapper">
          <table className="Orders-table" cellSpacing="0" cellPadding="0">
            <tr>
              <th className="Orders-table-heading">PRICE</th>
              <th className="Orders-table-heading">QUANTITY</th>
              <th className="Orders-table-heading">TOTAL</th>
            </tr>
            {table}
          </table>
        </div>
      </div>
    );
  }
}
Orders.propTypes = {
  keys: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coin: PropTypes.string.isRequired,
};
export default Orders;

