import React, { Component } from 'react';
import Header from '../Header';
import SignupBody from '../SignupBody';
import Body from '../Body';
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      homepage: true,
    };
  }
  navigatePage(page) {
    this.setState({
      homepage: page,
    });
  }
  render() {
    return (
      <div className="App">
        <Header active={this.state.homepage} navigatePage={page => this.navigatePage(page)} />
        {
          this.state.homepage ? <Body /> : <SignupBody />
        }
      </div>
    );
  }
}


export default App;
