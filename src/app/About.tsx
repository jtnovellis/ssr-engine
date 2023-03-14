import React from "react";

export function About() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hello World from About</h1>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </div>
  );
}