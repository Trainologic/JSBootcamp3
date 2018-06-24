import React, {Component} from 'react';
import './App.css';

class Counter extends Component {
  render() {
    return (
      <div className="App">
          <span>{this.props.counter.name}</span>
          <button onClick={this.props.onDec}>Dec</button>
          <span>{this.props.counter.value}</span>
          <button onClick={this.props.onInc}>Inc</button>
      </div>
    );
  }
}

export default Counter;
