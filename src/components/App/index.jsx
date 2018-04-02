import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import Header from '../Header';
import SignupBody from '../SignupBody';
import Body from '../Body';
import LoginBody from '../LoginBody';
import Portfolio from '../Portfolio';
import MyCustomContentTemplate from './MyCustomContentTemplate';
import TransfersBody from '../TransfersBody';
import NotFound from '../NotFound404';
import './index.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Body} />
      <Route path="/signup" component={SignupBody} />
      <Route path="/login" component={LoginBody} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/transfers" component={TransfersBody} />
      <Route path="*" exact component={NotFound} />
    </Switch>
    <Alert stack timeout={3000} contentTemplate={MyCustomContentTemplate} />
  </div>
);


export default withRouter(App);
