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
    const { notifications } = this.props;

    this.setState({
      notifications,
    });
  }
  componentWillUnmount() {
    const { notifications } = this.state;
    this.props.notificationNumberChange();
    const updateNotifications = notifications.map((eachNotification) => {
      eachNotification.status = true;
      return eachNotification;
    });
  }
  checkEmpty = () => {
    const notifs = this.state.notifications;

    if (notifs.length === 0) {
      return (
        <div className="Notification-each-true">
          <p className="Header-notifications-text">No New Notifications</p>
          <hr className="Header-notification-divider" />
        </div>
      );
    }
    const note = notifs.map(eachNotification => (
      <div className={eachNotification.status ? 'Notification-each-true' : 'Notification-each-false'} >
        <p className="Header-notifications-text">{eachNotification.text}</p>
        <hr className="Header-notification-divider" />
      </div>
    ));
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  notificationNumberChange: PropTypes.func.isRequired,
};

export default withRouter(Notification);
