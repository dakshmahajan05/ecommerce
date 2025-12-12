// File: src/screens/Register.jsx

import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
   const [formdata,setformdata] =useState({
        'email':'',
        'username':'',
        'password':'',
        'confirmpass':'',
      })
      
      const setData= (e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        });
      }
  
      const submihandler = (e) => {
        e.preventDefault(); 


        if (formdata.password !== formdata.confirmpass){
          alert("Passwords do not match. Please check again.");
          return; 
        }
        
        alert("Registration Successful!");
        console.log("Registration details:", formdata);
      }
  
  return (
    <div className='flex justify-center items-center min-h-screen '> 
        
        <div className='h-screen w-full absolute inset-0 bg-gradient-to-b from-[#F8F6E4] to-[#E0D7B8] z-0'>
            <h1 className='text-2xl font-bold text-gray-800 absolute top-10 w-full text-center'>Welcome To Clothing Hub !!</h1>
        </div>
    
        
        <div className='relative w-[90%] bg-white shadow-2xl rounded-lg p-8 max-w-md z-10'>
            <h1 className='text-3xl font-bold text-center mb-6 text-gray-800'>Register Now</h1>
            
            <form onSubmit={submihandler} className='flex flex-col space-y-4'> 
              
              <input onChange={setData} name='email' value={formdata.email} className='border-2 font-semibold w-full rounded-2xl  px-4 py-2 border-[#E0D7B8] focus:ring-2 focus:ring-amber-500 outline-none'  type="email" placeholder='Enter Your Email'/>
              <input onChange={setData} name='username' value={formdata.username} className='border-2 font-semibold w-full rounded-2xl  px-4 py-2 border-[#E0D7B8] focus:ring-2 focus:ring-amber-500 outline-none'  type="text" placeholder='Enter Your Name'/>
              <input onChange={setData} name='password' value={formdata.password} className='border-2 font-semibold w-full rounded-2xl  px-4 py-2 border-[#E0D7B8] focus:ring-2 focus:ring-amber-500 outline-none'  type="password" placeholder='Your Password'/>
              <input onChange={setData} name='confirmpass' value={formdata.confirmpass} className='border-2 font-semibold w-full rounded-2xl  px-4 py-2 border-[#E0D7B8] focus:ring-2 focus:ring-amber-500 outline-none'  type="password" placeholder='Confirm Password'/>

              <div className='mt-2 text-center text-sm'>
                <p>Already a user? 
                  <Link to={'/login'} className='text-blue-600 hover:underline ml-1 font-semibold'>
                    Sign in
                  </Link>
                </p>
              </div>

                           <button className='border-2 w-full hover:font-bold bg-[#f8f6e4]  hover:scale-x-105 hover:scale-y-105 border-none hover:bg-[#e0d7b8] hover:text-white  cursor-pointer rounded-xl px-[10%] py-[1%] border-[#E0D7B8]'  type="submit">Register Now</button>

            </form>
        </div>
        
    </div>
  )
}

export default Register