import React, { useState } from "react";
// import "Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={increment}>Clicks: {count}</button>;
}

export default Counter;
