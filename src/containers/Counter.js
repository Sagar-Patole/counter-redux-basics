import React, { Component } from 'react';
import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';

class Counter extends Component {
  state = {
    counter: 0,
  };
  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'INC':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'DEC':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'ADD':
        this.setState(prevState => {
          return { counter: prevState.counter + 20 };
        });
        break;
      case 'SUBTRACT':
        this.setState(prevState => {
          return { counter: prevState.counter - 15 };
        });
        break;
      default:
        return this.state;
    }
  };
  render() {
    return (
      <div>
        <CounterOutput counter={this.state.counter} />
        <CounterControl
          label="Increment"
          click={() => this.counterChangedHandler('INC')}
        />
        <CounterControl
          label="Decrement"
          click={() => this.counterChangedHandler('DEC')}
        />
        <CounterControl
          label="Add"
          click={() => this.counterChangedHandler('ADD', 10)}
        />
        <CounterControl
          label="Subtract"
          click={() => this.counterChangedHandler('SUBTRACT', 15)}
        />
      </div>
    );
  }
}

export default Counter;
