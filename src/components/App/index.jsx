import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header';
import SignupBody from '../SignupBody';
import Body from '../Body';
import LoginBody from '../LoginBody';
import Portfolio from '../Portfolio';
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
      <Route path="*" exact component={NotFound} />
    </Switch>
  </div>
);


export default withRouter(App);
