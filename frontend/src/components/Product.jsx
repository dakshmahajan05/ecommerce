
import React from 'react'
import { Link } from 'react-router-dom'
import saree from '../assets/saree.webp' 


const ProductCard = () => {
  return (
    <div className='w-full bg-[#F8F6E4] rounded-lg shadow-lg overflow-hidden 
                  transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl'>
      
      <div className='relative h-64 overflow-hidden p-2'>
        <Link to={`/product/123`}> 
            <img 
                src={saree} 
                className='w-full h-full object-contain rounded-md transition duration-300 hover:opacity-90' 
                alt="Product Name" 
            />
        </Link>
      </div>

      <div className='px-4 pt-1 pb-4 flex flex-col items-start'> 
          
          <h1 className='font-serif text-gray-800 text-base truncate w-full'>
              A Purple color saree
          </h1>
          
          <h1 className='font-bold text-xl text-amber-700 mt-1'>
              ₹999
          </h1>

          <p className='text-xs text-gray-600 mb-3'>a beautiful summer wear saree with designs in ity</p>
      
          <button 
              className='w-full bg-amber-600 text-white py-2 font-semibold rounded-md 
                         hover:bg-amber-700 transition duration-150 hover:scale-[1.01]'
          >
              Add to Cart
          </button>
      </div>
    </div>
  )
}

export default ProductCard;