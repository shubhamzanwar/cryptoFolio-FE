import React, { Component } from 'react';
import Pusher from 'pusher-js';
import PropTypes from 'prop-types';
import './index.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  componentDidMount() {
    console.log('inside did mount in notification');
    const { notifications } = this.props;
    console.log('notifications in notifiaction', notifications);
    if (JSON.parse(window.localStorage.getItem('cryptoNotifications'))[0]) {
      notifications.push(JSON.parse(window.localStorage.getItem('cryptoNotifications')));
    }
    this.setState({
      notifications,
    });
    console.log('inside did mount after setState in notification');
  }
  checkEmpty = () => {
    console.log('inside checkempty');
    const notifs = this.state.notifications;

    if (notifs.length === 0) {
      return 'No New Notifications';
    }
    const note = notifs.map((eachNotification) => {
      console.log(eachNotification);
      return (
        <div className="Notification-each" >
          {eachNotification.text}
        </div>
      );
    });
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

Notification.propTypes = {
  notifications: PropTypes.arrayOf().isRequired,
};

export default Notification;
