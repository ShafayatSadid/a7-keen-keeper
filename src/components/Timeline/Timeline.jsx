'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Calls from '../Calls/Calls';
import Texts from '../Texts/Texts';
import Videos from '../Videos/Videos';
import { useTimeline } from '@/context/TimelineContext';

const Timeline = () => {

    // all call text video data
    const { call, text, video } = useTimeline()

    // filter state
    const [filter, setFilter] = useState("");

    console.log(filter)
    return (
        <div className='py-20 max-w-[1110px] mx-auto px-2'>

            {/* heading */}
            <div>
                <h2 className='text-[3rem] font-bold mb-6'>Timeline</h2>

                <select onChange={(e) => setFilter(e.target.value)} 
                defaultValue="Filter timeline" className="select">
                    <option disabled={true}>Filter timeline</option>
                    <option value={"call"}>Call</option>
                    <option value={"text"}>Text</option>
                    <option value={"video"}>Video</option>
                </select>
            </div>

            {/* main card */}
            <div className='mt-6 space-y-4'>

                {/* call */}
                {
                    (filter === "" || filter === "call") && call.map((item, index) => <Calls key={index} item={item} />)
                }

                {/* text */}
                {
                    (filter === "" || filter === "text") && text.map((item, index) => <Texts key={index} item={item} />)
                }

                {/* video */}
                {
                    (filter === "" || filter === "video") && video.map((item, index) => <Videos key={index} item={item} />)
                }

            </div>
        </div>
    );
};

export default Timeline;