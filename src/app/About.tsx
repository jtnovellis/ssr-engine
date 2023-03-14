import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export function About() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hello World from About</h1>
      <Button onClick={() => setCount(prev => prev + 1)}>{count}</Button>
    </div>
  );
}