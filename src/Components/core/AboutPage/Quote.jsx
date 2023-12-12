import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import HighlightText from '../Dashboard/HomePage/HighlightText';


const Quote = () => {
  return (
    <div className='relative'>
        <FaQuoteLeft className='absolute left-[10px] top-3 text-[#424854]'/>
        <div className="text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white relative">
        At Clarkton, we're fueled by a passion for transforming the auto parts industry. Our innovative platform converges <HighlightText text={"technology, expertise, and community"}/>, 
            <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold"> creating an unmatched experience for buying and selling auto parts</span>, and community to create an 
            <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold"> unparalleled e-commerce experience.</span>
        </div>
        <FaQuoteRight className='absolute text-[#424854] bottom-[102px] right-[500px]'/>
    </div>
  )
}

export default Quote
