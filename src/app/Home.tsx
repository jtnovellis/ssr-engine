import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
`

type HomeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  todos: any[]
}

export function Home({ todos }: HomeProps) {

  return (
    <div>
      <Title>Hello World from Home</Title>
      <List>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </List>
    </div>
  );
}