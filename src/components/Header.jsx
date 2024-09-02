
import cart from '../image/icons8-cart-24 (1).png'
import React, { useState, useEffect } from 'react'
import user from '../image/icons8-user-50.png';
import logout from '../image/icons8-logout-24.png';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleStatusTab } from '../store/Cart'

function Header() {
  const dispatch = useDispatch();
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  }
  return (
    // <header className='flex bg-pink-200 justify-between items-center mb-5'>
    //     <Link to="/" className='text-xl font-semibold'>Home</Link>
    //     <div className='w-10 h-10 bg-gray-100 rounded-full
    //     flex justify-center items-center relative' onClick={handleOpenTabCart}>
    //         <img src={cart} alt="" className='w-6'/>
    //         <span className='absolute top-2/3 right-1/2 bg-blue-500 text-white text-sm
    //         w-5 h-5 rounded-full flex justify-center items-center'>0</span>
    //     </div>
    // </header>

    <nav className="bg-fuchsia-700 border-gray-200 dark:bg-purple-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img classNameName='rounded-full h-10 w-10' src="https://cdn-icons-png.freepik.com/512/2504/2504814.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-slate-50 text-2xl font-semibold whitespace-nowrap">ហាងលក់ទំនេញ</span>

        </a>
        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-50 rounded-lg md:hidden hover:bg-gray-100 hover:text-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="flex items-center md:order-2 space-x-2 md:space-x-4 rtl:space-x-reverse">
          <div >
            <a href="#" class="flex items-center p-2 text-slate-50 rounded-lg  dark:hover:bg-gray-700 group">
              <img src={user} alt="" className='h-8 w-8' />
              <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
          </div>


          <button type="button" className="flex text-sm  rounded-full border-2 border-cyan-50 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={logout} alt="user photo" />
          </button>

          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">

            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>

          <div className='mx-3 relative cursor-pointer hover:scale-125 duration-500' onClick={handleOpenTabCart}>
            <img src={cart} alt="" className='h-8 w-8' />  <span className="absolute top-0 right-0 bg-white text-pink-600 text-xs w-4 h-4 rounded-full flex justify-center items-center">
              2
            </span>
          </div>
          <span className='text-white'>$ 344.00</span>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <a href="#" className="block py-2 px-3 text-white font-medium hover:text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white font-medium rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white font-medium rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header