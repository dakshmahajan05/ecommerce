// File: src/components/Products.jsx (Top Sellers Section)

import React from 'react';
import Product from './Product'; // Tumhari custom naming rakhi gayi hai

const Products = () => {
  return (
    // Padding aur White Background Container
    <div className='bg-white px-4 sm:px-8 md:px-12 py-10'> 
      
      {/* Section Heading */}
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-8 mt-4'>
        ✨ Our Trending Designs
      </h2>
      
      {/* Product Grid with Responsive Columns (Tumhara existing grid structure) */}
      <div className='grid gap-6 
                    grid-cols-2 sm:grid-cols-3 
                    lg:grid-cols-4 xl:grid-cols-5'>
        
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default Products