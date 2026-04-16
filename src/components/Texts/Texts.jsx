import Image from 'next/image';
import textIcon from '@/assets/text.png'

const Texts = ({item}) => {

    const {name, currentDate, currentDay} = item;
    return (
        <div className='max-w-[1110px] h-[83px] bg-[#ffffff] flex items-center gap-4 px-4 rounded-lg'>
            <Image src={textIcon} width={40} height={40} alt='call icon' />

            <div>
                <span className='text-[1.25rem] font-medium text-[#244D3F]'>Text</span> <span className='text-[#64748B] text-[1.125rem] '>with {name}</span>
                <p className='text-[#64748B] text-[1.125rem] '>{`${currentDay} ${currentDate}`}March 19, 2026</p>
            </div>
        </div>
    );
};

export default Texts;