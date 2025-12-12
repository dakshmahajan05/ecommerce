// File: src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/small_logo.png'; 

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-[#F8F6E4] shadow-md 
                       flex items-center justify-between py-3 
                       px-4 sm:px-[5%] md:px-[10%] lg:px-[10%] xl:px-[8%]'>
        
        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
            <img src={logo} className='h-8 w-auto' alt="Clothing Hub Logo" /> 
            <h3 className='text-xs sm:text-sm md:text-sm lg:text-base font-semibold'>
                Clothing Hub
            </h3>
        </Link>
        
        <nav className='hidden md:flex items-center space-x-4 lg:space-x-8'>
            <Link to='/sarees' className='cursor-pointer text-sm lg:text-base hover:text-amber-600 transition'>Sarees</Link>
            <Link to='/kurtis' className='cursor-pointer text-sm lg:text-base hover:text-amber-600 transition'>Kurtis</Link>
            <Link to='/suits' className='cursor-pointer text-sm lg:text-base hover:text-amber-600 transition'>Suits</Link>
            <Link to='/collections' className='cursor-pointer text-sm lg:text-base hover:text-amber-600 transition'>Collections</Link>
        </nav>


        <div className='flex items-center space-x-4'>

            {/* Search Bar */}
            <div className='relative flex items-center w-32 sm:w-40 lg:w-48'>
                <input 
                    className='w-full border border-gray-400 rounded-md py-1 pr-3 pl-8 focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm' 
                    type="text" 
                    placeholder='Search...'
                />
                
                <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500'>
                    <span className="material-symbols-outlined text-xl"> 
                        search 
                    </span>
                </span>
            </div>

            {/* Cart Icon */}
            <Link to='/cart' className="text-gray-700 hover:text-amber-600 transition">
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            </Link>
            
            {/* User/Login Icon */}
            <Link to='/login' className="text-gray-700 hover:text-amber-600 transition hidden sm:inline">
                <span className="material-symbols-outlined text-2xl">person</span>
            </Link>
            
        </div>
    </header>
  )
}

export default Header;