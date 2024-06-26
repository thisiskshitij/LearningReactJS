import { useState } from "react";

function Counter() {
  const [value, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(value + 1);
  };

  const decrementCounter = () => {
    setCounter(value - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <p className="counter-display">{value}</p>
      <button className="counter-button" onClick={incrementCounter}>Increment</button>
      <button className="counter-button" onClick={decrementCounter}>Decrement</button>
      <button className="counter-button" onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Counter;
