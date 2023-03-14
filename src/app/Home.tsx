import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Hello World from Home</h1>
      <Link to="about">About</Link>
    </div>
  );
}