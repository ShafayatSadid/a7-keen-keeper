

const TrackerCard = () => {
    return (
        <div className='flex flex-wrap justify-center items-center gap-6 py-10'>
            {/* Card one */}
            <div className='w-[259.5px] h-[137px] bg-[#ffffff] text-center rounded-lg py-8'>
                <h2 className='text-[2rem] text-[#244D3F] font-semibold'>8</h2>
                <p className='text-[1rem] text-[#64748B]'>Total Friends</p>
            </div>

            {/* Card two */}
            <div className='w-[259.5px] h-[137px] bg-[#ffffff] text-center rounded-lg py-8'>
                <h2 className='text-[2rem] text-[#244D3F] font-semibold'>3</h2>
                <p className='text-[1rem] text-[#64748B]'>On Track</p>
            </div>

            {/* Card three */}
            <div className='w-[259.5px] h-[137px] bg-[#ffffff] text-center rounded-lg py-8'>
                <h2 className='text-[2rem] text-[#244D3F] font-semibold'>6</h2>
                <p className='text-[1rem] text-[#64748B]'>Need Attention</p>
            </div>

            {/* Card four */}
            <div className='w-[259.5px] h-[137px] bg-[#ffffff] text-center rounded-lg py-8'>
                <h2 className='text-[2rem] text-[#244D3F] font-semibold'>12</h2>
                <p className='text-[1rem] text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default TrackerCard;