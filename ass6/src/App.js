import React, { useState, useEffect } from 'react';

function App() {
  // Step 1: Set up the counter state using useState hook
  const [counter, setCounter] = useState(0);

  // Step 2: Use useEffect to update the document title whenever the counter changes
  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter]); // Effect runs whenever the counter changes

  // Step 3: Increment and decrement functions
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="counter-container">
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={increment} className="button">Increment</button>
        <button onClick={decrement} className="button">Decrement</button>
      </div>
    </div>
  );
}

export default App;
