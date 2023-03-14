import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

const container = document.getElementById('app')
const initialProps = JSON.parse(decodeURIComponent(container.getAttribute('data-initial-props')))

hydrateRoot(container, 
  <BrowserRouter>
    <App {...initialProps} />
  </BrowserRouter>
)

