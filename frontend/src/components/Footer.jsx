import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="w-full bg-[#F8F6E4] py-10 px-[5%] flex  md:flex-row justify-between gap-10 text-sm">

      {/* Logo Section */}
      <div>
        <img src={logo} className="w-24 md:w-32 lg:w-40" alt="logo" />
      </div>

      {/* Legal Section */}
      <div className="flex flex-col">
        <p className="font-bold mb-2">Legal & Policies</p>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:underline">Terms and Conditions</li>
          <li className="cursor-pointer hover:underline">Shipping & Returns Policy</li>
          <li className="cursor-pointer hover:underline">Refund Policy</li>
          <li className="cursor-pointer hover:underline">Copyright Notice</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex flex-col">
        <p className="font-bold mb-2">Navigation & Support</p>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:underline">Sitemap</li>
          <li className="cursor-pointer hover:underline">Customer Service</li>
          <li className="cursor-pointer hover:underline">FAQ</li>
          <li className="cursor-pointer hover:underline">About Us</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="flex flex-col space-y-2">
        <p className="font-bold mb-2">Contact & Trust</p>

        <div className="flex items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined">phone_in_talk</span>
          <p>+91 7834843092</p>
        </div>

        <div className="flex  items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined">mail</span>
          <p>mahajandaksh682@gmail.com</p>
        </div>
      </div>

    </div>
  )
}

export default Footer