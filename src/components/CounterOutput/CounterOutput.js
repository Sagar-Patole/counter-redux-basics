import React from 'react';
import './CounterOutput.css';

const CounterOutput = ({ counter }) => {
  return <div className="CounterOutput">Counter: {counter}</div>;
};

export default CounterOutput;
