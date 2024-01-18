/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        {/* header and footer remain same but OutLet will change  */}
            <Header />

            <Outlet />

            <Footer />
        </>

    )
}

export default Layout