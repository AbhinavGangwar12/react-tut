import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
