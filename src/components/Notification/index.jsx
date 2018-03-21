import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Notification extends Component {
  render() {
    console.log('hi');
    const note = JSON.parse(window.localStorage.getItem('cryptoNotifications'));
    console.log(note);
    return (
      <div className="Notification-body">
        {note.map(eachNotification => (
          <div >
            {eachNotification.text}
          </div>
          ))}
      </div>
    );
  }
}

Notification.propTypes = {

};

export default Notification;
