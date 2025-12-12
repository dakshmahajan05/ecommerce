import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [formdata,setformdata] =useState({
      'email':'',
      'password':'',
    })
    const setData= (e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
      }

    const submihandler = (e)=>{
      e.preventDefault();
      alert("register")
      console.log("login details",formdata);
      
    }



  return (
   <div className='flex justify-center items-center min-h-screen '> 
        
        <div className='h-screen w-full absolute flex-col justify-center items-center min-h-screen text-center  inset-0 
                      bg-gradient-to-b py-10 from-[#F8F6E4] to-[#E0D7B8] z-0'>
                       

            <h1 className='text-2xl  font-bold text-gray-800'>Welcome To Clothing Hub !!</h1>

                       
        </div>
    
        
        <div className='relative w-[70%] bg-white shadow-2xl rounded-lg p-8 max-w-md z-10'>
            <h1 className='text-3xl font-bold text-center mb-6'>Login Now</h1>
            <form action="" onSubmit={submihandler}  className='flex flex-col justify-center items-center text-center space-y-4 md:space-y-3 '>
              <input onChange={setData} name='email' value={formdata.email} className='border-2 w-full font-semibold rounded-xl px-[10%] py-[1%] border-[#E0D7B8]'  type="email" placeholder='Enter Your Email'/>
              <input onChange={setData} name='password' value={formdata.password} className='border-2 w-full font-semibold rounded-xl px-[10%] py-[1%] border-[#E0D7B8]'  type="password" placeholder='Your Password'/>

            <Link to={'/register'}>
            <p className='text-sm'>Dont have an account <span className='text-blue-600 text-xs'>Register Now</span> </p>
            </Link>

              <button className='border-2 w-full hover:font-bold bg-[#f8f6e4]  hover:scale-x-105 hover:scale-y-105 border-none hover:bg-[#e0d7b8] hover:text-white  cursor-pointer rounded-xl px-[10%] py-[1%] border-[#E0D7B8]'  type="submit">Sign In</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login