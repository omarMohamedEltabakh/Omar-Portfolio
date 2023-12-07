import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import ContactUs from './component/ContactUs/ContactUs';

export default function App() {



  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <ContactUs /> },
      ]
    }
  ])




  return <>
   
      <RouterProvider router={routers} />
  
  </>
}
