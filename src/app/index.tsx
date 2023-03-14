import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './About'
import { App } from './App'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: 'about',
//         element: <About />,
//       }
//     ]
//   },
// ])

hydrateRoot(document.getElementById('app'), 
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

