import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const NewsLetter = () => {
  return (
   <div className="flex flex-col items-center w-full max-w-6xl lg:w-full rounded px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-white text-gray-900">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-[40px]">Never Miss a Deal!</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <input type="text" className="px-4 py-2.5 border border-primary/50 rounded outline-none max-w-66 w-full placeholder:text-gray-500" placeholder="Enter your email" />
                <button className="flex items-center justify-center gap-2 group bg-primary cursor-pointer group px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">Subscribe
                    <HiArrowLongRight className='group-hover:translate-x-1 transition-all duration-300 ease-in text-white'/>
                </button>
            </div>
            <p className="text-gray-500 mt-6 text-xs text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
        </div>
    
  )
}

export default NewsLetter