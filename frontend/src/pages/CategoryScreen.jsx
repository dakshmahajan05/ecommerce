// File: src/screens/CategoryScreen.jsx (UPDATED CODE for Mobile Filters)

import React, { useState } from 'react'; // 🚨 1. useState import kiya
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product'; 
import FilterSidebar from '../components/FilterSidebar';

const CategoryScreen = () => {
    // 🚨 2. State banaya mobile filters ki visibility ke liye
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    return (
        <div className='min-h-screen bg-white pt-[65px]'>
            <Header /> 
            
            <div className='container mx-auto px-4 py-8'>
                
                <h1 className='text-3xl font-bold text-gray-800 mb-6'>
                    All Sarees
                </h1>
                
                <div className='flex flex-col md:flex-row gap-6'>
                    
                    {/* 1. Filter Sidebar Area */}
                    <div className='w-full md:w-1/4 lg:w-1/5'>
                        
                        {/* 🚨 3. Filter Sidebar ko Mobile par conditionally render kiya */}
                        {/* Mobile par, jab showMobileFilters TRUE ho, tab dikhega */}
                        {/* Desktop par (md:block) hamesha dikhega */}
                        
                        <div className={`md:block ${showMobileFilters ? 'block' : 'hidden'}`}>
                            <FilterSidebar />
                        </div>
                        
                        {/* 🚨 4. Button ko Functional banaya */}
                        <button 
                            className='md:hidden w-full bg-amber-600 text-white py-2 rounded-md font-medium mb-4'
                            // Button click hone par state toggle (ulta) ho jayegi
                            onClick={() => setShowMobileFilters(!showMobileFilters)} 
                        >
                            {/* Button ka text state ke hisaab se badla */}
                            {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>
                        
                    </div>
                    
                    {/* 2. Product Grid Area (Baaki sab same rahega) */}
                    <div className='w-full md:w-3/4 lg:w-4/5'>
                        
                        {/* ... Sorting Dropdown ... */}
                        
                        {/* ... Product Grid ... */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                        
                        {/* ... Pagination ... */}
                    </div>
                </div>
            </div>
            
            <Footer /> 
        </div>
    );
}

export default CategoryScreen;