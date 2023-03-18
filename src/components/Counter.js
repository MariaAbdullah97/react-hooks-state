import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);

  function increment() {
    setCount(count + 1);
  }
  console.log(`After increment${count}`)

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
