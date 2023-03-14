import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import styled from 'styled-components'

type AppProps = {
  props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    todos: any[]
  }
} | null

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
`
const globalStyles = `
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    max-width: 1200px;
    margin: 0 auto;
  }
`

export function App(initialProps: AppProps) {
  const props = initialProps.props || null
  return (
    <>
      <style>{globalStyles}</style>
      <Nav>
        <a href="/">Home</a>
        <a href="about">About</a>
      </Nav>
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>

  );
}