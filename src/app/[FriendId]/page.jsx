import friends from '@/data/friendsData.json';
import Image from 'next/image';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendDetailsPage = async ({ params }) => {

    const { FriendId } = await params

    const targetFriend = friends.find(friend => friend.id == FriendId);
    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = targetFriend;

    return (
        <div className='my-20'>
            {/* left side */}
            <div className=''>


                {/* profile and bio */}
                <div className='py-6 max-w-[350px] shadow-sm rounded-lg bg-[#ffffff] mx-auto'>
                    {/* card image */}
                    <div className='rounded-full'>
                        <Image src={picture}
                            alt={name}
                            width={80}
                            height={80}
                            className='rounded-full mx-auto'
                        ></Image>

                        {/* title */}
                        <h3 className='text-[1.25rem] font-semibold text-center'>{name} </h3>

                        {/* status */}
                        <div className='mt-3 text-center'>
                            <button className={`py-1 px-2 ${status === "overdue" ? 'bg-[#EF4444]' : ''} ${status === "almost due" ? 'bg-[#EFAD44]' : ''} ${status === "on-track" ? 'bg-[#244D3F]' : ''} text-[#ffffff] text-[0.750rem] font-medium rounded-2xl`}>{status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}</button>
                        </div>

                        {/* tags */}
                        <div className='mt-2 flex items-center gap-2 justify-center'>
                            {
                                tags.map((tag, index) =>
                                    <button key={index} className='py-1 px-2 bg-[#CBFADB] text-[#244D3F] text-[0.750rem] font-medium rounded-2xl'>{tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}</button>)
                            }
                        </div>

                        <p className='text-[1rem] text-center my-3 text-[#64748B] italic max-w-[254px] mx-auto font-medium'>"{bio}"</p>

                        <p className='text-[#64748B] font-medium text-[0.750rem] text-center '>Preferred: email</p>
                    </div>
                </div>

                {/* snooze, archive, delete */}
                <div className='flex justify-center items-center gap-2 max-w-[350px] h-[53px] shadow-sm rounded-lg bg-[#ffffff] mt-4 text-[1rem] font-medium text-[#1F2937]/80 mx-auto'>
                    <span><RiNotificationSnoozeLine /></span>
                    <p className=' '>Snooze 2 weeks</p>
                </div>

                {/* archive */}
                <div className='flex justify-center items-center gap-2 max-w-[350px] h-[53px] shadow-sm rounded-lg bg-[#ffffff] mt-4 text-[1rem] font-medium text-[#1F2937]/80 mx-auto'>
                    <span><FiArchive /></span>
                    <p className=' '>Archive</p>
                </div>

                {/* delete */}
                <div className='flex justify-center items-center gap-2 max-w-[350px] h-[53px] shadow-sm rounded-lg bg-[#ffffff] mt-4 text-[1rem] font-medium text-[#EF4444]/80 mx-auto'>
                    <span><RiDeleteBin6Line /></span>
                    <p className=' '>Delete</p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;