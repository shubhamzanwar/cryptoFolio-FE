import React, { Component } from 'react';
import Header from '../Header';
import SignupBody from '../SignupBody';
import Body from '../Body';
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      homepage: 1,
      activeButton: 0,
    };
  }
  changeActiveButton = (value) => {
    this.setState({
      activeButton: value,
    });
  }
  navigatePage = (page) => {
    this.setState({
      homepage: page,
    })
  }
  render() {
    return (
      <div className="App">
        <Header active={this.state.activeButton} navigatePage={(page)=> this.navigatePage(page)}/>
        { 
          this.state.homepage ? <Body /> : <SignupBody button={(value)=> this.changeActiveButton(value)}/>
        }
      </div>
    );
  }
}


export default App;
