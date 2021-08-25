import React, { useEffect, useState }from "react";
import './App.css';
import randomColor from 'randomcolor';

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App() {
  const [ count, setCount ] = useState(0); //setCount is the function that changes the count vale
  const [ color, setColor] = useState("");

  useEffect(()=>{
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000) //1000 means every second
    return () => {
      clearInterval(intervalId) //will clean up and act like componentDidUnMount
    }
  }, [])

  useEffect(()=>{
    setColor(randomColor());
  },[count]) //second thing after comma is what variable to watch if empty the useEffect will never run again
  
  return (
    <div className="App">
      <h1 style={{color: color}}>{count}</h1>
    </div>
  );
}

export default App;
