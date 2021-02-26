import React from 'react';
import './CounterControl.css';

const CounterControl = ({ label, click }) => {
  return (
    <div className="CounterControl" onClick={click}>
      {label}
    </div>
  );
};

export default CounterControl;
