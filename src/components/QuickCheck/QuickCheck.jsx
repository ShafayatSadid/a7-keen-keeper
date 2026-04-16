'use client'
import { useTimeline } from '@/context/TimelineContext';
import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';

const QuickCheck = ({name}) => {

    // use context for checking
    const {HandleCall, HandleText, HandleVideo} = useTimeline();

    // new date
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

    return (
        <div className='max-w-[736px] bg-[#ffffff] shadow-sm mt-6 rounded-lg p-6'>

                    <h2 className='text-[1.25rem] font-medium text-[#244D3F] text-center md:text-left'>Quick Check-In</h2>

                    {/* call text video */}
                    <div className='mt-4 flex flex-wrap items-center justify-center gap-4'>
                        {/* call */}
                        <div onClick={()=> HandleCall({name, currentDate, currentDay})} className='w-[218px] h-[95px] btn flex flex-col gap-2 text-[1.125rem] '>
                            <span>
                                <LuPhoneCall />
                            </span>
                            <p>Call</p>
                        </div>

                        {/* text */}
                        <div onClick={()=> HandleText({name, currentDate, currentDay})} className='w-[218px] h-[95px] btn flex flex-col gap-2 text-[1.125rem] '>
                            <span>
                                <MdOutlineTextsms />
                            </span>
                            <p>Text</p>
                        </div>


                        {/* video */}
                        <div onClick={()=> HandleVideo({name, currentDate, currentDay})} className='w-[218px] h-[95px] btn flex flex-col gap-2 text-[1.125rem] '>
                            <span>
                                <IoVideocamOutline />
                            </span>
                            <p>Video</p>
                        </div>
                    </div>
                </div>
    );
};

export default QuickCheck;