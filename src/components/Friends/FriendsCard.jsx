import Image from "next/image";
import Card from "./Card";

const FriendsCard = ({ friends }) => {

    return (
        <div className='py-10 max-w-[1110px] mx-auto'>
            <h2 className='text-[1.5rem] font-semibold text-center lg:text-left mb-4'>Your Friends</h2>

            {/* friends Cards are here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* one card */}
                {
                    friends.map(friend => <Card friend={friend} key={friend.id} />)
                }
            </div>

        </div>
    );
};

export default FriendsCard;