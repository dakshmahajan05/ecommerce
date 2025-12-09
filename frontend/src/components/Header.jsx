import React from 'react'
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <div className='border-t-20 font- border-t-[#E0D7B8] align-middle px-7 sm:px-[5%] lg:px-[15%] py-[3%]  sm:h-30px lg:h-[50px] flex justify-between'>
            <h3 className='sm:mr-5 cursor-pointer font-semibold lg:mr-10'>Suhani Style Studio</h3>
            <h3 className='cursor-pointer'>Sarees</h3>
            <h3 className='cursor-pointer'>Kurtis</h3>
            <h3 className='cursor-pointer'>Suits</h3>
            <h3 className='cursor-pointer'>Collections</h3>
            <div>
                <input className=' border-1 pl-7 sm:w-25 md:w-40 lg:w-60' type="text" placeholder='search'/>

            </div>
    </div>
  )
}

export default Header;