// File: src/components/FilterSidebar.jsx (Final Logic)

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // 🚨 Imports

const FilterSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // URL se initial values nikaalna
    const urlParams = new URLSearchParams(location.search);
    
    // 🚨 1. State Management
    const [priceRange, setPriceRange] = useState({
        min: urlParams.get('min_price') || 100, // Default min price
        max: urlParams.get('max_price') || 5000, // Default max price
    });
    const [selectedSizes, setSelectedSizes] = useState(
        urlParams.get('size') ? urlParams.get('size').split(',') : []
    );

    const availableSizesList = ['S', 'M', 'L', 'XL', 'XXL'];

    // 2. Input Handlers
    
    // Price Slider Handler
    const handlePriceChange = (event) => {
        setPriceRange(prev => ({
            ...prev,
            max: Number(event.target.value) 
        }));
    };
    
    // Size Checkbox Handler
    const handleSizeChange = (size) => {
        setSelectedSizes(prevSizes => {
            if (prevSizes.includes(size)) {
                // Agar already selected hai, toh remove karo
                return prevSizes.filter(s => s !== size);
            } else {
                // Agar selected nahi hai, toh add karo
                return [...prevSizes, size];
            }
        });
    };

    //  Apply Filters Button Logic (Main Function)
    const applyFilters = () => {
        
        // 1. New query parameters object banaya
        const newParams = new URLSearchParams();
        
        // 2. Price parameters add kiye (Min aur Max)
        newParams.set('min_price', priceRange.min); 
        newParams.set('max_price', priceRange.max); 

        // 3. Sizes parameters add kiye (Comma separated string)
        if (selectedSizes.length > 0) {
            newParams.set('size', selectedSizes.join(',')); 
        } else {
            newParams.delete('size'); // Agar koi size select nahi hai toh query se hata do
        }

        // 4. Existing category/search params ko maintain karna
        // Current URL ke existing params ko copy karo aur new params se overwrite karo
        urlParams.forEach((value, key) => {
            if (!newParams.has(key)) {
                newParams.set(key, value);
            }
        });


        // 5. URL ko navigate karo
        // Example URL: /sarees?min_price=100&max_price=3000&size=S,M
        navigate({ 
            search: newParams.toString() 
        });
    };

    // Reusable Filter Section
    const FilterSection = ({ title, children }) => (
        <div className="border-b border-gray-300 pb-4 mb-4">
            <h4 className="text-md font-semibold text-gray-800 mb-3">{title}</h4>
            {children}
        </div>
    );

    return (
        <div className='w-full bg-[#F8F6E4] p-4 rounded-lg shadow-md'>
            
            <h3 className='text-xl font-bold text-gray-800 mb-5'>
                Filter Products
            </h3>

            {/* 1. Price Range Filter */}
            <FilterSection title={`Price Up To: ₹ ${priceRange.max}`}>
                <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    value={priceRange.max} // State se bind kiya
                    onChange={handlePriceChange} // Handler lagaya
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-amber-600 focus:ring-2" 
                />
                <div className='flex justify-between text-sm mt-1'>
                    <span>₹ {priceRange.min}</span>
                    <span>₹ 5000+</span>
                </div>
            </FilterSection>

            {/* 2. Size Filter */}
            <FilterSection title="Size">
                <div className="grid grid-cols-3 gap-2 text-sm">
                    {availableSizesList.map(size => (
                        <label key={size} className="flex items-center space-x-2 cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="form-checkbox text-amber-600 rounded" 
                                checked={selectedSizes.includes(size)} // State se bind kiya
                                onChange={() => handleSizeChange(size)} // Handler lagaya
                            />
                            <span>{size}</span>
                        </label>
                    ))}
                </div>
            </FilterSection>
            
            <button 
                className='w-full bg-amber-600 text-white py-2 rounded-md font-medium 
                           hover:bg-amber-700 transition duration-200 mt-4'
                onClick={applyFilters} // 🚨 Button click par filters apply honge
            >
                Apply Filters
            </button>
        </div>
    );
}

export default FilterSidebar;