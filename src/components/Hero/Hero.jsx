import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='text-center'>
            <h1 className='text-[3rem] text-[#1F2937] font-bold text-center pt-20 '>Friends to keep close in your life</h1>

            <p className='text-[#64748B] text-[1rem] mt-4 max-w-[600px] mx-auto '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <button className='btn border-none bg-[#244D3F] text-[#ffffff] mt-8 '><FaPlus /> Add A Friend</button>
        </div>
    );
};

export default Hero;