/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React from 'react'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {

  return (

<div className=' bg-gray-300 h-screen '>
    <UserContextProvider >
      <Login  />
      <Profile />
    </UserContextProvider>
      </div>

  )
}

export default App
