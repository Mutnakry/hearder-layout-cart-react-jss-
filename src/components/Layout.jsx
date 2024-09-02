import React from 'react'
import Header from './Header'
import CartTab from './CartTab'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <div className=''>
            <div >
                <Header />
                <Outlet />
            </div>
            <CartTab />
        </div>
    )
}

export default Layout