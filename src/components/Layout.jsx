// import React from 'react'
// import Header from './Header'
// import CartTab from './CartTab'
// import Footer from './Footer'
// import { Outlet } from 'react-router-dom'


// function Layout() {
//     return (
//         <div className=''>
//             <div >
//                 <Header />
//                 <Outlet />
//             </div>
//             <CartTab />
//             <Footer/>
//         </div>
//     )
// }

// export default Layout








import React from 'react';
import Header from './Header';
import CartTab from './CartTab';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <CartTab />
            <Footer />
        </div>
    );
}

export default Layout;
