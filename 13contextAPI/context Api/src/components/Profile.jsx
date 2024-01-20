/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div className='flex  items-center border-2 border-black justify-center h-[10%]'>Please login</div>
{console.log(user)}

    return <div className='flex  items-center border-2 border-black justify-center h-[10%]'>Welcome {user.username} </div>
}

export default Profile