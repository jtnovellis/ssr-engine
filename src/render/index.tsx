import React from "react";
import { renderToString } from 'react-dom/server'
import { App } from "../app/App";
import { StaticRouter } from 'react-router-dom/server'
import { template } from "./template";

export function render(path: string) {
  const stream = renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  )
  const html = template(stream)
  return html
}