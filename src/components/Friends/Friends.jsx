import React from 'react';
import TrackerCard from './TrackerCard';
import FriendsCard from './FriendsCard';
import friendsData from '@/data/friendsData.json';

const Friends = () => {
console.log(friendsData)
    
    return (
        <div className=''>
            <TrackerCard/>
            <hr className='text-[#E9E9E9] max-w-[1110px] mx-auto '/>
            <FriendsCard friends={friendsData}/>
        </div>
    );
};

export default Friends;