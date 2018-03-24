import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';
import Notification from '../Notification';
import './index.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
      loginButton: false,
      notifications: [],
      numberNotifications: 0,
    };
  }
  componentDidMount() {
    let numberNotifications = 0;
    const authToken = window.localStorage.getItem('cryptotoken');
    fetch('/notification', {
      method: 'GET',
      headers: {
        authtoken: authToken,
      },
    }).then(data => data.json())
      .then((data) => {
        console.log(data);
        window.localStorage.setItem('cryptoNotifications', JSON.stringify(data));
      }).then(() => {
        let notifications = [];
        if (JSON.parse(window.localStorage.getItem('cryptoNotifications'))[0]) {
          notifications.push(JSON.parse(window.localStorage.getItem('cryptoNotifications')));
          notifications = notifications[0];
          console.log(notifications);
          numberNotifications = notifications.reduce((accumulator, currentNotif) => {
            if (currentNotif.status === false) {
              accumulator += 1;
            }
            return accumulator;
          }, 0);
        }
        const pusher = new Pusher('2f14d98336c0adcbc97b', {
          cluster: 'ap2',
          encrypted: true,
        });
        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', (data2) => {
          if (data2.name === window.localStorage.getItem('cryptousername')) {
            notifications.unshift(data2);
            window.localStorage.setItem('cryptoNotifications', JSON.stringify(notifications));
            this.setState({
              notifications,
              numberNotifications: numberNotifications + 1,
            });
          }
        });
        this.setState({
          notifications,
          numberNotifications,
        });
      });
  }
  notificationNumberChange=() => {
    this.setState({
      numberNotifications: 0,
    });
  }
  logout() {
    window.localStorage.setItem('cryptologgedin', false);
    window.localStorage.setItem('cryptotoken', null);
    window.localStorage.setItem('cryptousername', null);
    this.forceUpdate();
    this.props.history.push('/');
  }
  toggleLogin = () => {
    this.setState({
      loginButton: !this.state.loginButton,
      showNotification: false,
    });
  }
  toggleNotifications = () => {
    this.setState({
      showNotification: !this.state.showNotification,
      loginButton: false,
    });
    if (this.state.showNotification === false) {
      fetch('/notification', {
        method: 'PUT',
        headers: {
          authtoken: window.localStorage.getItem('cryptotoken'),
        },
      });
    }
  }
  render() {
    return (
      <header className="Header">
        <div className="Header-container">
          <Link className="Header-home-link" to="/">
            <h3
              className="Header-heading"
            >
              <i className="fa fa-briefcase" aria-hidden="true" /> Crypto Folio
            </h3>
          </Link>
          {
          window.localStorage.getItem('cryptologgedin') === 'true' ?
            <div className="Header-button-container">
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/"
                exact
              >
                <p>Home</p>
              </NavLink>
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/portfolio"
              >
                <p>Portfolio</p>
              </NavLink>
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/transfers"
              >
                <p>Transfers</p>
              </NavLink>
            </div>
              : ''}
          {
          window.localStorage.getItem('cryptologgedin') === 'true' ?

            <div className="Header-user">
              <span
                className="Header-notification"
                onClick={() => this.toggleNotifications()}
              >
                <i className="material-icons">notifications_none</i>
                <span className="Header-notification-number">{this.state.numberNotifications}</span>
                <div className="Header-notification-body">
                  {this.state.showNotification ?
                    <Notification
                      notificationNumberChange={() => this.notificationNumberChange()}
                      notifications={this.state.notifications}
                    />
                  : ''
                }
                </div>
              </span>
              <p
                onClick={() => this.toggleLogin()}
              >
                {window.localStorage.getItem('cryptousername')}
                <i className="fas fa-caret-down" />
                {this.state.loginButton ?
                  <div className="Header-logout-link">
                    <button
                      className="Header-logout-button"
                      onClick={() => this.logout()}
                    ><p>Logout </p><i className="fas fa-sign-out-alt" />
                    </button>
                  </div>
              : ''}
              </p>
            </div> :
            <div className="Header-button-container">
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/signup"
              >
                <p>Register</p>
              </NavLink>
              <NavLink
                className="login-button-a"
                to="/login"
                activeClassName="Header-button-selected"
              >
                <p>Login</p>
              </NavLink>
            </div>
            }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
