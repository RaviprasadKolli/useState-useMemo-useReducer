import React, { useReducer, useState, useMemo } from 'react';
import './App.css';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  let [countone, setCount] = useState(0);
  let [otherValue, setOtherValue] = useState(10);

  let expensiveCalculation = useMemo(() => {
    return countone * 2;
  }, [countone]);

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Count: {countone}</h1>
        
        <h2>Expensive Calculation Result: {expensiveCalculation}</h2>
        <button onClick={() => setCount(countone + 1)}>Increment Count</button>
        <button onClick={() => setCount((countone = 0))}>Reset</button>
        <h1>Other: {otherValue}</h1>
        <button onClick={() => setOtherValue(otherValue + 1)}>
          Change Other Value
        </button>
        
        <button onClick={() => setOtherValue((otherValue = 0))}>
          ResetOther
        </button>
      </div>
      <h1>Count :- {count}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button className="Btn-counter" onClick={() => dispatch('reset')}>
        Reset
      </button>
    </>
  );
}

export default App;
