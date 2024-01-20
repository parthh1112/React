/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const { setUser } = useContext(UserContext)



  const handleSubmit = (e) => {

    e.preventDefault()
    setUser({ username, password })


  }
  return (
    <>
      <div className=' flex  items-center border-2 border-black justify-center h-[50%]'>
        <h1>Login</h1>
        <input className='' type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />

        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Login