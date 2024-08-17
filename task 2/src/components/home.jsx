import React from 'react'

const Home = () => {
    return (
        <div className=''>
            <div className="mx-20 my-16 flex">
                <div className="flex flex-col">
                    <h1 className='font-extrabold mb-10 '>Desserts</h1>
                    <div className="flex flex-wrap gap-9">
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-waffle-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Waffle</p>
                                <p className='font-bold'>Waffle with Berries</p>
                                <p className='text-[#bd6d00] font-semibold'>$6.50</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-creme-brulee-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Creme Brûlé0</p>
                                <p className='font-bold'>Vanilla Bean Crème Brûlée</p>
                                <p className='text-[#bd6d00] font-semibold'>$7.00</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-macaron-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Macaron</p>
                                <p className='font-bold'>Macaron Mix of Five</p>
                                <p className='text-[#bd6d00] font-semibold'>$8.00</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-tiramisu-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Tiramisu</p>
                                <p className='font-bold'>Classic Tiramisu</p>
                                <p className='text-[#bd6d00] font-semibold'>$5.50</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-baklava-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Baklava</p>
                                <p className='font-bold'>Pistachio Baklava</p>
                                <p className='text-[#bd6d00] font-semibold'>$4.00</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-cake-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Pie</p>
                                <p className='font-bold'>Lemon Meringue Pie</p>
                                <p className='text-[#bd6d00] font-semibold'>$5.00</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-meringue-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Cake</p>
                                <p className='font-bold'>Red Velvet Cake</p>
                                <p className='text-[#bd6d00] font-semibold'>$4.50</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-brownie-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Brownie</p>
                                <p className='font-bold'>Salted Caramel Brownie</p>
                                <p className='text-[#bd6d00] font-semibold'>$5.50</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-80 h-80 rounded-xl "
                                    src="src/assets/images/image-panna-cotta-desktop.jpg"
                                    alt="image-waffle-desktop"
                                />
                                <button
                                    className="relative bottom-[20px] border rounded-full px-7 py-2 flex items-center bg-white border-[#c5a77e] shadow-lg gap-2"
                                    type="button"
                                >
                                    <img src="src/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <p className='opacity-50 text-[#5e2407]'>Panna Cotta</p>
                                <p className='font-bold'>Vanilla Panna Cotta</p>
                                <p className='text-[#bd6d00] font-semibold'>$6.50</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-xl min-w-[450px] h-[320px] flex flex-col gap-11'>
                    <h2 className=' font-extrabold text-[#a7573d] mt-3'>Your Cart (0)</h2>
                    <img className="flex self-center" src="src/assets/images/illustration-empty-cart.svg" alt="illustration-empty-cart" />
                    <p className='text-[#a7573d] text-center'>Your added items will appear here</p>
                </div>
            </div>
        </div>
    )
}

export default Home
