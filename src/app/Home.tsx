import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

export function Home() {
  return (
    <div>
      <Title>Hello World from Home</Title>
      <a href="about">About</a>
    </div>
  );
}