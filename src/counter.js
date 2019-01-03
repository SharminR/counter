import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  state={ counter: 0 };
  handleClick = () => {
    console.log('handleClick');
    this.setState(prevState => {

    return {
      counter: prevState.counter + 1
    }
  });
}
  getBgClass(value) {
    if (!value) {
      return '';
    }
    if (value%2) {
      return 'bg-even';
    } else {
      return 'bg-odd';
    }
  }
  render() {
    return (
      <div className={'counter ' + this.getBgClass(this.state.counter)} onClick={this.handleClick}>{ this.state.counter }</div>
    );
  }
}

export default Counter;
