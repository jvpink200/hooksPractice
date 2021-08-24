import React, { useState }from "react";
import './App.css';
// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App() {
  const [ count, setCount ] = useState(0); //setCount is the function that changes the count vale
  
  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount -1);
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
