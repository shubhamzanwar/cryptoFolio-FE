import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../Loader';
import './index.css';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.getdata(this.props.coin);
    this.interval = setInterval(() => this.getdata(this.props.coin), 5000);
  }
  componentWillUpdate(nextProps) {
    if (nextProps.coin !== this.props.coin) {
      this.setState({
        data: {},
      });
      this.getdata(nextProps.coin);
      clearInterval(this.interval);
      this.interval = setInterval(() => this.getdata(nextProps.coin), 5000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getdata(coin) {
    axios.get(`/orders/${coin}`).then((data) => {
      this.setState({
        data,
      });
    });
  }
  render() {
    if (Object.keys(this.state.data).length === 0) {
      return <div className="Orders-div"><Loader /></div>;
    }
    const dataToBeRendered = this.state.data.data[this.props.keys];
    const table = dataToBeRendered.map(row =>
      (
        <tr className="Orders-row-tr">
          <td className="Orders-row-td">{Number(row.price).toFixed(6)}</td>
          <td className="Orders-row-td">{Number(row.quantity).toFixed(6)}</td>
          <td className="Orders-row-td">{Number(row.total).toFixed(6)}</td>
        </tr>
      ));
    return (
      <div className="Orders-div">
        <h3 className="Orders-title"><span style={{ color: '#e8b342' }}>BINANCE</span> {this.props.title} ({this.props.coin})</h3>
        <div className="Orders-table-wrapper">
          <table className="Orders-table" cellSpacing="0" cellPadding="0">
            <tr>
              <th className="Orders-table-heading">PRICE (USDT)</th>
              <th className="Orders-table-heading">QUANTITY</th>
              <th className="Orders-table-heading">TOTAL (USDT)</th>
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

