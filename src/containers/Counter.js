import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterOutput from '../components/CounterOutput/CounterOutput';
import CounterControl from '../components/CounterControl/CounterControl';
import CounterList from './CounterList';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput counter={this.props.ctr} />
        <CounterControl label="Increment" click={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" click={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" click={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" click={this.props.onSubtractCounter} />
        <br />
        <button className="btn btn-primary" onClick={this.props.onShowCounter}>
          Store Result
        </button>
        {this.props.reslts.length > 0 ? <CounterList /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    reslts: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INC' }),
    onDecrementCounter: () => dispatch({ type: 'DEC' }),
    onAddCounter: () => dispatch({ type: 'ADD', value: 10 }),
    onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 5 }),
    onShowCounter: () => dispatch({ type: 'SHOW' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
