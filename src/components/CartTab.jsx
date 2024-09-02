import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../store/Cart';
import iconClose from '../image/close-30.png'

const CartTab = () => {
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}>
            <div className='flex items-center px-8'>
                <img className='hover:text-pink-900 ' src={iconClose} alt="" onClick={handleCloseTabCart} />
                <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
            </div>
            <div className='p-5'>
            </div>
            <div className='grid grid-cols-2'>
                <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
                <button className='bg-amber-600 text-white'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartTab