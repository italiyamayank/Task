import React, { useState } from 'react'

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Function to toggle the cart
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    return (
        <div className='md:hidden'>
            <nav onClick={toggleCart} className="flex justify-end p-4 bg-white shadow-md">
                <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
            </nav>
            <div className="flex justify-end">
                {isCartOpen && <div className='bg-white p-4 rounded-xl min-w-[360px] flex flex-col gap-11 mr-2 mt-2'>
                    <h2 className=' font-extrabold text-[#a7573d] mt-3'>Your Cart (0)</h2>
                    <img className="flex self-center" src="src/assets/images/illustration-empty-cart.svg" alt="illustration-empty-cart" />
                    <p className='text-[#a7573d] text-center'>Your added items will appear here</p>
                </div>}
            </div>

        </div>
    )
}

export default Header
