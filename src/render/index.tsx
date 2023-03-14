import React from "react";
import { renderToString } from 'react-dom/server'
import { App } from "../app/App";
import { StaticRouter } from 'react-router-dom/server'
import { template } from "./template";
import { ServerStyleSheet } from 'styled-components'


async function getInitialProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()
  return {
    props: {
      todos: data
    }
  }
}



export async function render(path: string) {
  try {
    const initialProps = await getInitialProps() || null
    const sheet = new ServerStyleSheet()
    const stream = renderToString(
      sheet.collectStyles(
        <StaticRouter location={path}>
          <App {...initialProps} />
        </StaticRouter>
      )
    )
    const styleTags = sheet.getStyleTags()
    const html = template({ html: stream, styles: styleTags, initialProps: JSON.stringify(initialProps) })
    return html
  } catch (err) {
    console.log(err)
  }
}