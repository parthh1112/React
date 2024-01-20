/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React, { useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}> {/* giving access of data from here   */}
            {children}
        </UserContext.Provider>
    )

}



export default UserContextProvider