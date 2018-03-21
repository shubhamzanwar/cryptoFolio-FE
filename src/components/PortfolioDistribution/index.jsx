import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioDistributionChart from '../PortifolioDistributionChart';
import PortfolioDistributionLabel from '../PortofolioDistributionLabel';
import colors from '../../utils/constants/chartColors'; 
import './index.css';


class PortfolioDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'invested',
      pieData: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.conditionInput(nextProps.userTransactions);
  }

  conditionInput(trans) {
    const pieData = trans.map((transaction, index) => ({
      name: transaction.coinName,
      y: transaction[this.state.displayType],
      color: colors[index]
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
          <p className="Distribution-Header-Title">Investment</p>
          <div className="Distribution-Tabs-Button">
            {/* <button className={this.state.displayType === 'invested' ? 'selected' : ''} onClick={() => this.displayType('invested')}>Invested</button> */}
          </div>
        </div>
        <div className="Distribution-GraphContainer">
          <div className="Graph">
            <PortfolioDistributionChart portfolioData={this.state.pieData} />
          </div>
          <div className="GraphLabel">
            <div className="GraphLabelItemContainer">
              { this.state.pieData.map((coin, index) => (
                <PortfolioDistributionLabel
                  value={coin.y}
                  symbol={coin.name}
                  color={colors[index]}
                />))
              }
            </div>
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
