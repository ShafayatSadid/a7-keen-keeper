import QuickCheck from '@/components/QuickCheck/QuickCheck';
import { useTimeline } from '@/context/TimelineContext';
import friends from '@/data/friendsData.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';


const FriendDetailsPage = async ({ params }) => {

    

    const { FriendId } = await params

    const targetFriend = friends.find(friend => friend.id == FriendId);
    
    if(!targetFriend){
        notFound();
    }

    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = targetFriend;

    return (
        <div className='my-20 flex flex-wrap justify-center gap-6'>

            {/* left side */}
            <div className=''>


                {/* profile and bio */}
                <div className='py-6 w-[350px] shadow-sm rounded-lg bg-[#ffffff] mx-auto'>
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

                        <p className='text-[#64748B] text-[0.875rem] text-center '>Preferred: email</p>
                    </div>
                </div>

                {/* snooze, archive, delete */}
                <div className='flex justify-center items-center gap-2 w-[350px] h-[53px] shadow-sm rounded-lg bg-[#ffffff] mt-4 text-[1rem] font-medium text-[#1F2937]/80 mx-auto'>
                    <span><RiNotificationSnoozeLine /></span>
                    <p className=' '>Snooze 2 weeks</p>
                </div>

                {/* archive */}
                <div className='flex justify-center items-center gap-2 w-[350px] h-[53px] shadow-sm rounded-lg bg-[#ffffff] mt-4 text-[1rem] font-medium text-[#1F2937]/80 mx-auto'>
                    <span><FiArchive /></span>
                    <p className=' '>Archive</p>
                </div>

                {/* delete */}
                <div className='flex justify-center items-center gap-2 w-[350px] h-[53px] shadow-sm rounded-lg bg-[#ffffff] mt-4 text-[1rem] font-medium text-[#EF4444]/80 mx-auto'>
                    <span><RiDeleteBin6Line /></span>
                    <p className=' '>Delete</p>
                </div>
            </div>

            {/* right side */}
            <div className='px-2'>
                {/* tracking history */}
                <div className='flex flex-wrap items-center gap-6 justify-center'>
                    {/* one */}
                    <div className='w-[229px] h-[134px] bg-[#ffffff] shadow-sm rounded-lg flex flex-col justify-center items-center gap-2'>
                        <h2 className='text-[1.875rem] font-semibold text-[#244D3F]'>{days_since_contact}</h2>

                        <p className='text-[1.125rem] text-[#64748B]'>Days Since Contact</p>
                    </div>

                    {/* two */}
                    <div className='w-[229px] h-[134px] bg-[#ffffff] shadow-sm rounded-lg flex flex-col justify-center items-center gap-2'>
                        <h2 className='text-[1.875rem] font-semibold text-[#244D3F]'>{goal}</h2>

                        <p className='text-[1.125rem] text-[#64748B]'>Goal (Days)</p>
                    </div>

                    {/* three */}
                    <div className='w-[229px] h-[134px] bg-[#ffffff] shadow-sm rounded-lg flex flex-col justify-center items-center gap-2'>
                        <h2 className='text-[1.875rem] font-semibold text-[#244D3F]'>{next_due_date}</h2>

                        <p className='text-[1.125rem] text-[#64748B]'>Next Due</p>
                    </div>
                </div>

                {/* Relationship goal */}
                <div className='max-w-[736px] h-[121px] bg-[#ffffff] shadow-sm rounded-lg mt-6 p-6'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[1.25rem] font-medium text-[#244D3F] '>Relationship Goal</h2>
                        <button className='btn text-[0.785rem] font-medium '>Edit</button>
                    </div>

                    <p className='text-[1rem] text-[#64748B] mt-3'>Connect every <span className='font-bold text-[#1F2937] '>{goal} days</span></p>
                </div>

                {/* Quick check */}
                <QuickCheck name={name}/>

            </div>
        </div>
    );
};

export default FriendDetailsPage;