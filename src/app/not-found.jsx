import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-[5rem] text-[#244D3F] font-extrabold'>404</h1>
            <h3 className='text-[2rem] font-bold '>Page Not Found</h3>
            <p className='text-[#64748B] max-w-[400px] text-center'>Looks like the friendship link is broken. The page you are looking for does not exist or has been moved.</p>

            <Link href={"/"} className="btn bg-[#244D3F] text-[#ffffff] mt-5 "><AiOutlineHome /> Back to Home</Link>
        </div>
    );
};

export default NotFoundPage;