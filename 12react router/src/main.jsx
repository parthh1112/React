/* eslint-disable no-unused-vars */
import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactAs from './components/ContactAs/ContactAs'
import User from './components/User/User.jsx' 
// const router = createBrowserRouter([ // this is a hard way to do this below code is more easy 
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },

//       {
//         path: "ContactAs",
//         element: <ContactAs />
//       }
//     ]
//   }
// ])


// easy code below 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='ContactAs' element={<ContactAs />} />
      <Route path='User/:userId' element={<User />} /> 
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
