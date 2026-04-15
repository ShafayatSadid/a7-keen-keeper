import Image from 'next/image';


const Card = ({ friend }) => {

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;
    return (

        <div className="w-[259.5px] h-[254px] bg-[#ffffff] py-6 rounded-lg shadow-sm mx-auto">
            {/* card image */}
            <div className='rounded-full'>
                <Image src={picture}
                    alt={name}
                    width={80}
                    height={80}
                    className='rounded-full mx-auto'
                ></Image>
            </div>

            {/* card content */}
            <div className='text-center mt-3'>

                {/* title */}
                <h3 className='text-[1.25rem] font-semibold '>{name} </h3>
                <p className='text-[#64748B] text-[0.750rem] '>{days_since_contact}d ago</p>

                {/* tags */}
                <div className='mt-2 flex items-center gap-2 justify-center'>
                    {
                        tags.map((tag, index) =>
                            <button key={index} className='py-1 px-2 bg-[#CBFADB] text-[#244D3F] text-[0.750rem] font-medium rounded-2xl'>{tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}</button>)
                    }
                </div>

                {/* status */}
                <div className='mt-3'>
                    <button className={`py-1 px-2 ${status === "overdue" ? 'bg-[#EF4444]':''} ${status === "almost due" ? 'bg-[#EFAD44]':''} ${status === "on-track" ? 'bg-[#244D3F]':''} text-[#ffffff] text-[0.750rem] font-medium rounded-2xl`}>{status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}</button>
                </div>
            </div>

        </div>
    );
};

export default Card;