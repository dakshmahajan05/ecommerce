import React from 'react'
import heroImage from '../assets/hero1.webp'
import heroImage2 from '../assets/hero2.webp'
import saree from '../assets/saree.webp'
import kurti from '../assets/kurti.webp'
import dress from '../assets/dress.webp'
import occassionals from '../assets/occassion.webp'
import top from '../assets/top.jpg'
import bottom from '../assets/bottom.webp'


const Content = () => {
  return (
    <div className='bg-[#F8F6E4] sm:bg-top border-[#F8F6E4]  mt-[15%] md:mt-[10%] lg:mt-[10%] xl:mt-[8%] justify-center h-[70%] items-center flex flex-col'>

{/* top content shop now  */}


      <div
        className="relative mb-12 w-[95%] mx-auto 
                   h-64 md:h-80 hover:scale-102 transition duration-500 lg:h-96 xl:h-[30rem] 2xl:h-[35rem] 
                   bg-cover bg-no-repeat 
                   
                   /* ▼▼▼ FIX 1: Responsive Position ▼▼▼ */
                   bg-top sm:bg-top md:bg-top lg:bg-top
                   
                   opacity-90"
        
        style={{ backgroundImage: `url(${heroImage})` }}
      >
// ...
        {/* Z-Index Fix: Z-index ko z-10 se badla gaya. 
            Background Image ke upar text hamesha z-index higher rakhega.
        */}
       <div className='absolute flex flex-col justify-center left-[5%] xl:left-[10%] z-10
                      
                      /* 🚨 FIX 2: Vertical positioning ko aur clean kiya gaya */
                      bottom-[10%] md:bottom-[15%] lg:bottom-[20%]' >
                      
            
            {/* FIX 3: Text Color Contrast */}
            <p className='text-slate-800 text-xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold'>
              The Festive 
            </p>       
            <p className='text-slate-800 text-xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold mb-2'>
              Collection
            </p>
            
            {/* Subtext ko aur chota aur lighter kiya, aur contrast badhaya */}
            <p className='text-white text-sm opacity-90 md:mb-2 font-light'>
              unveiling timeless elegance
            </p>
            
            {/* Button width aur color fixed */}
            <button className='text-white hover:scale-105 transform-3d mt-3 text-sm cursor-pointer font-semibold bg-amber-600 hover:bg-amber-700 w-32 rounded-md py-2 px-4 transition'>
              SHOP NOW
            </button>

       </div>


      </div>


{/* categories */}

<div
  className="w-full mb-20 flex flex-col  bg-fixed bg-cover bg-center bg-no-repeat pt-20 pb-15 gap-9"
  style={{ backgroundImage: `url(${heroImage2})` }}
>
  <div className='flex justify-around gap-6 w-full'>

  {/* Saree */}
  <div className='w-[23%] transition duration-300 hover:scale-110 flex flex-col items-center'>
    <img className='w-full hover:transition duration-500  h-full object-cover cursor-pointer' src={saree} alt=""/>
    <p className='text-gray-900 cursor-pointer relative -top-30 text-white left-[4%] opacity-80 lg:-top-50 md:-top-40 text-lg md:text-xl lg:text-2xl font-bold mt-2'>
      Saree
    </p>
  </div>

  {/* Kurti */}
  <div className='w-[23%] transition duration-300 hover:scale-110 flex flex-col items-center'>
    <img className='w-full hover:transition duration-500  h-full object-cover cursor-pointer' src={kurti} alt=""/>
    <p className='text-gray-900 cursor-pointer relative -top-30 text-white left-[4%] opacity-80 lg:-top-50 md:-top-40  text-lg md:text-xl lg:text-2xl font-bold mt-2'>
      Kurti
    </p>
  </div>

  {/* Dress */}
  <div className='w-[23%] transition duration-300 hover:scale-110 flex flex-col items-center'>
    <img className='w-full hover:transition duration-500  h-full object-cover cursor-pointer' src={dress} alt=""/>
    <p className='text-gray-900  cursor-pointer relative -top-30 text-white opacity-80 lg:-top-50 md:-top-40  text-lg md:text-xl lg:text-2xl font-bold mt-2'>
      Dress
    </p>
  </div>
  </div>
  <div className='flex justify-around gap-6 w-full'>

  {/* Ocassional */}
  <div className='w-[23%] transition duration-300 hover:scale-110 flex flex-col items-center'>
    <img className='w-full hover:transition duration-500  h-full object-cover cursor-pointer' src={occassionals} alt=""/>
    <p className='text-gray-900 cursor-pointer relative -top-30 text-white left-[4%] opacity-80 lg:-top-50 md:-top-40 text-lg md:text-xl lg:text-2xl font-bold mt-2'>
      Ocassional
    </p>
  </div>

  {/* Tops */}
  <div className='w-[23%] transition duration-300 hover:scale-110 flex flex-col items-center'>
    <img className='w-full hover:transition duration-500  h-full object-cover cursor-pointer' src={top} alt=""/>
    <p className='text-gray-900 cursor-pointer relative -top-30 text-white left-[4%] opacity-80 lg:-top-50 md:-top-40  text-lg md:text-xl lg:text-2xl font-bold mt-2'>
    Tops
    </p>
  </div>

  {/* Bottoms */}
  <div className='w-[23%] transition duration-300 hover:scale-110 flex flex-col items-center'>
    <img className='w-full hover:transition duration-500  h-full object-cover cursor-pointer' src={bottom} alt=""/>
    <p className='text-gray-900  cursor-pointer relative -top-30 text-white opacity-80 lg:-top-50 md:-top-40  text-lg md:text-xl lg:text-2xl font-bold mt-2'>
      Bottoms
    </p>
  </div>
  </div>
{/* top selling categories */}
        <div className='flex justify-center hover:transition duration-500 md:text-base lg:text-base xl:text-base  cursor-pointer 2xl:text-base text-sm md:mt-6 lg:mt-10'>
          <p className='text-white hover:transition duration-500'>Top Selling Categories</p>
        </div>
  
</div>

    </div>
  )
}

export default Content