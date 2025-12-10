import React from 'react';
import bg_image from '../assets/hero2.webp';

const Content2 = () => {
  return (
    <div
      className="bg-cover bg-top bg-fixed grid grid-cols-2 grid-rows-3 gap-10 p-[10%]"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      {/* Row Items */}
      <p className="text-white  p-5 text-center cursor-pointer bg-black shadow-gray-700 flex justify-center items-center md:text-3xl lg:text-4xl text-xl font-bold">
        High Quality
      </p>

      <p className="text-white  p-5 text-center cursor-pointer bg-black shadow-gray-700 flex justify-center items-center md:text-3xl lg:text-4xl text-xl font-bold">
        Low Price
      </p>

      <p className="text-white bordetext-center flex cursor-pointer bg-black shadow-gray-700 justify-center items-center md:text-3xl lg:text-4xl text-xl font-bold">
        Fast Delivery
      </p>

      <p className="text-white  p-5 text-center cursor-pointer bg-black shadow-gray-700 flex justify-center items-center md:text-3xl lg:text-4xl text-xl font-bold">
        Authentic Items
      </p>

      <p className="text-white  p-5 text-center cursor-pointer bg-black shadow-gray-700 flex justify-center items-center md:text-3xl lg:text-4xl text-xl font-bold">
        Trusted by People
      </p>

      <p className="text-white  p-5 text-center cursor-pointer bg-black shadow-gray-700 flex justify-center items-center md:text-3xl lg:text-4xl text-xl font-bold">
        2 Days Easy Return
      </p>
    </div>
  );
};

export default Content2;