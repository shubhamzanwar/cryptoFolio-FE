import React from 'react';
import TwitterPost from './TwitterPost';
import './index.css';

const tweets = [{
  content: 'And then they have the audacity to say that Bitcoin Cash is trying to "steal the Bitcoin brand."\nWhy does Bitcoin… \nhttps://t.co/CNfuVMWBhu',
  screenName: 'Bitcoin',
  fullName: 'Bitcoin',
  profPic: 'http://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg',
}, {
  content: 'And then they have the audacity to say that Bitcoin Cash is trying to "steal the Bitcoin brand."\nWhy does Bitcoin… \nhttps://t.co/CNfuVMWBhu',
  screenName: 'Bitcoin',
  fullName: 'Bitcoin',
  profPic: 'http://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg',
}, {
  content: 'And then they have the audacity to say that Bitcoin Cash is trying to "steal the Bitcoin brand."\nWhy does Bitcoin… \nhttps://t.co/CNfuVMWBhu',
  screenName: 'Bitcoin',
  fullName: 'Bitcoin',
  profPic: 'http://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg',
}, {
  content: 'And then they have the audacity to say that Bitcoin Cash is trying to "steal the Bitcoin brand."\nWhy does Bitcoin… \nhttps://t.co/CNfuVMWBhu',
  screenName: 'Bitcoin',
  fullName: 'Bitcoin',
  profPic: 'http://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg',
}];


const TwitterBox = () => (
  <div className="TwitterBox">
    <h3>Twitter <i className="fab fa-twitter TwitterBox-icon" /></h3>
    <div className="TwitterBox-posts">
      {
          tweets.map(tweet => (
            <div>
              <TwitterPost tweet={tweet} />
              <hr className="Twitter-divider" />
            </div>))
      }
    </div>
  </div>
);

export default TwitterBox;

