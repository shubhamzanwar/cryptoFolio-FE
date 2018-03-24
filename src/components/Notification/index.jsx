import React, { Component } from 'react';
import Pusher from 'pusher-js';
import { withRouter } from 'react-router-dom';
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
    this.setState({
      notifications,
    });
    console.log('inside did mount after setState in notification');
  }
  componentWillUnmount() {
    const notifications = this.state.notifications;
    this.props.notificationNumberChange();
    const updateNotifications = notifications.map((eachNotification) => {
      eachNotification.status = true;
      return eachNotification;
    });
  }
  checkEmpty = () => {
    console.log('inside checkempty');
    const notifs = this.state.notifications;

    if (notifs.length === 0) {
      return (
        <div className="Notification-each-true">
     No New Notifications
        </div>
      );
    }
    const note = notifs.map((eachNotification) => {
      console.log(eachNotification);
      return (
        <div className={eachNotification.status ? 'Notification-each-true' : 'Notification-each-false'} >
          {eachNotification.text}
        </div>
      );
    });
    return note;
  }
  render() {
    const allNotification = this.checkEmpty();
    return (
      <div className="Notification-body" onClick={() => this.props.history.push('/transfers')}>
        {allNotification}
      </div>
    );
  }
}

Notification.propTypes = {
  notifications: PropTypes.arrayOf().isRequired,
};

export default withRouter(Notification);
