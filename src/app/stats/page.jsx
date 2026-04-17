import PieChartComponents from '@/components/PieChartComponents/PieChartComponents';
import React from 'react';

const StatsPage = () => {
    return (
        <div className='py-20 max-w-[1110px] w-full mx-auto px-1'>
            <h2 className='text-[3rem] font-bold'>Friendship Analytics</h2>

            <div className='max-w-[1110px] w-full h-[410px] mx-auto bg-[#ffffff] rounded-lg p-8 mt-6 '>
                <h3 className='text-[1.25rem] font-medium mb-6'>By Interaction Type</h3>
                <PieChartComponents />
            </div>

        </div>
    );
};

export default StatsPage;