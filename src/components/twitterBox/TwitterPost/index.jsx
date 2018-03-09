import React from 'react';
import PropTypes from 'prop-types';

const TwitterPost = props => (
  <div className="TwitterBox-post">
    <div className="TwitterBox-user">
      <div
        className="Twitter-user-image"
        style={
            {
                backgroundImage: `url(${props.tweet.profPic})`,
                backgroundSize: 'cover',
            }
        }
      />
      <div className="Twitter-user-name">
        <p className="Twitter-user-fullname">{props.tweet.fullName}</p>
        <p className="Twitter-user-screenname">@{props.tweet.screenName}</p>
      </div>
    </div>
    <div className="Twitter-post-content">
      {props.tweet.content}
    </div>
  </div>
);


TwitterPost.propTypes = {
  tweet: PropTypes.shape({
    profPic: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    screenName: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

TwitterPost.defaultProps = {
  tweet: {},
};

export default TwitterPost;
