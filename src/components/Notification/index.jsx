import React, { Component } from 'react';
import Pusher from 'pusher-js';
// import PropTypes from 'prop-types';
import './index.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  componentDidMount() {
    const notifications = [];
    const pusher = new Pusher('2f14d98336c0adcbc97b', {
      cluster: 'ap2',
      encrypted: true,
    });
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data2) => {
      console.log(data2);
      if (data2.name === window.localStorage.getItem('cryptousername')) {
        console.log('notification!', data2.text);
        notifications.push(data2);
      }
    });
    if (JSON.parse(window.localStorage.getItem('cryptoNotifications'))[0]) {
      notifications.push(JSON.parse(window.localStorage.getItem('cryptoNotifications')));
    }
    this.setState({
      notifications,
    });
  }
  checkEmpty = () => {
    const notifs = this.state.notifications;
    if (notifs.length === 0) {
      return 'No New Notifications';
    }
    const note = notifs.map(eachNotification => (
      <div className="Notification-each" >
        {eachNotification.text}
      </div>
    ));
    return note;
  }
  render() {
    const allNotification = this.checkEmpty();
    return (
      <div className="Notification-body">
        {allNotification}
      </div>
    );
  }
}

export default Notification;
