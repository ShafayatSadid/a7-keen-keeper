'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLinks = ({href, children}) => {

    const pathname = usePathname();

    return (
        <Link href={href} className={`btn border-none text-[1rem] font-medium py-3 px-4 ${pathname == href?'bg-[#244D3F] text-[#ffffff]' : 'bg-[#ffffff] text-[#64748B]'}`}>
            {children}
        </Link>
    );
};

export default MyLinks;