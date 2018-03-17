import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioDistributionChart from '../PortifolioDistributionChart';
import PortfolioDistributionLabel from '../PortofolioDistributionLabel';
import './index.css';


class PortfolioDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'quantity',
      pieData: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.conditionInput(nextProps.userTransactions);
  }

  conditionInput(trans) {
    const pieData = trans.map(transaction => ({
      name: transaction.coinName,
      y: transaction[this.state.displayType],
    }));
    this.setState({
      pieData,
    });
  }

  displayType(type) {
    this.setState({
      displayType: type,
    }, () => {
      this.conditionInput(this.props.userTransactions);
    });
  }

  render() {
    return (
      <div className="Distribution">
        <div className="Distribution-Header">
          <p className="Distribution-Header-Title">My Coins</p>
          <div className="Distribution-Tabs-Button">
            <button className={this.state.displayType === 'quantity' ? 'selected' : ''} onClick={() => this.displayType('quantity')} >Quantity</button>
            <button className={this.state.displayType === 'invested' ? 'selected' : ''} onClick={() => this.displayType('invested')}>Invested</button>
          </div>
        </div>
        <div className="Distribution-GraphContainer">
          <div className="Graph">
            <PortfolioDistributionChart portfolioData={this.state.pieData} />
          </div>
        </div>
      </div>
    );
  }
}

PortfolioDistribution.propTypes = {
  userTransactions: PropTypes.shape({
    coinName: PropTypes.string.isRequired,
    coinSymbol: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    invested: PropTypes.number.isRequired,
  }),
};

PortfolioDistribution.defaultProps = {
  userTransactions: [],
};

export default PortfolioDistribution;
