


import './App.css';
import { useState } from 'react';

export default function App(){
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return(
    <div className="container">
      <p className="count">Count: {count}</p>
      <div className="buttons">
        <button className="button" onClick={increase}>Increase</button>
        <button className="button" onClick={decrease}>Decrease</button>
        <button className="button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
