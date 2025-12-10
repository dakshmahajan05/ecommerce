import React from 'react'
import logo from '../assets/small_logo.png'


const Header = () => {
  return (
    <div className='border-t-20 fixed top-0 left-0 w-full z-50  text-center items-center md:px-[10%] border-t-[#E0D7B8] border-b-20 border-[#F8F6E4] bg-[#F8F6E4] align-middle lg:text-base px-7 sm:px-[5%] md:text-lg  lg:px-[10%] xl:px-[8%] py-[3%] text-sm sm:h-30px lg:h-[50px] flex justify-between'>
            <img src={logo} className='h-15 cursor-pointer w150' alt="" />
            <h3 className='sm:mr-5 sm:text-sm mr-2 cursor-pointer font-semibold lg:mr-10'>Clothing Hub</h3>
            <h3 className='cursor-pointer sm:text-sm mr-2'>Sarees</h3>
            <h3 className='cursor-pointer sm:text-sm mr-2'>Kurtis</h3>
            <h3 className='cursor-pointer sm:text-sm mr-2'>Suits</h3>
            <h3 className=' cursor-pointer sm:text-sm mr-2'>Collections</h3>
         


<div className='relative flex items-center w-40 sm:w-56 lg:w-64'> 
    
    <input 
        className='w-full border mr-5 border-gray-400 rounded-md py-1 pr-3 pl-8 focus:outline-none focus:ring-1 focus:ring-[--color-accent-rose]' 
        type="text" 
        placeholder='Search...'
    />
    
    <span 
        className='absolute left-2  top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer'
    >
        <span className="material-symbols-outlined absolute -top-3 text-xl"> 
            search  
        </span>
    </span>
        <span class="material-symbols-outlined cursor-pointer font-bold">
        shopping_cart
        </span>
</div>
    </div>
  )
}

export default Header;