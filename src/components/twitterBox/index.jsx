import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TwitterPost from './TwitterPost';
import './index.css';

class TwitterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
    this.getTweets(this.props.coin);
  }
  componentWillUpdate(nextProps) {
    if (nextProps.coin !== this.props.coin) {
      this.getTweets(nextProps.coin);
    }
  }
  getTweets(coin) {
    axios.get(`/twitter/${coin}`).then((tweets) => {
      this.setState({
        tweets: tweets.data,
      });
    });
  }
  render() {
    return (
      <div className="TwitterBox">
        <h3>Twitter <i className="fab fa-twitter TwitterBox-icon" /></h3>
        <div className="TwitterBox-posts">
          {
          (this.state.tweets).map(tweet => (
            <div>
              <TwitterPost tweet={tweet} />
              <hr className="Twitter-divider" />
            </div>))
      }
        </div>
      </div>
    );
  }
}

TwitterBox.propTypes = {
  coin: PropTypes.string,
};

TwitterBox.defaultProps = {
  coin: 'BTC',
};

export default TwitterBox;

