import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Notification extends Component {
  render() {
    console.log('hi');
    const note = JSON.parse(window.localStorage.getItem('cryptoNotifications'));
    console.log(note[0].text);
    const allNotification = note.map(eachNotification => (
      <div className="Notification-each" >
        {eachNotification.text}
      </div>
    ));
    return (
      <div className="Notification-body">
        {allNotification}
      </div>
    );
  }
}

Notification.propTypes = {

};

export default Notification;
