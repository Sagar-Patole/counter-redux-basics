import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput counter={this.props.ctr} />
        <CounterControl label="Increment" click={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" click={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" click={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" click={this.props.onSubtractCounter} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INC' }),
    onDecrementCounter: () => dispatch({ type: 'DEC' }),
    onAddCounter: () => dispatch({ type: 'ADD', value: 10 }),
    onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 5 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
