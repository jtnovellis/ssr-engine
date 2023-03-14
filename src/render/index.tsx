import React from "react";
import { renderToString } from 'react-dom/server'
import { App } from "../app/App";
import { StaticRouter } from 'react-router-dom/server'
import { template } from "./template";
import { ServerStyleSheet } from 'styled-components'



export function render(path: string) {
  try {
    const sheet = new ServerStyleSheet()
    const stream = renderToString(
      sheet.collectStyles(
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      )
    )
    const styleTags = sheet.getStyleTags()
    const html = template(stream, styleTags)
    return html
  } catch (err) {
    console.log(err)
  }
}