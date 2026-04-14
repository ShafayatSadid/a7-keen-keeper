import { ImStatsDots } from "react-icons/im";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import MyLinks from "./MyLinks";

const NavBar = () => {

    // nav links
    const navLinks = [
        {
            path: "/",
            icon: <RiHome2Line />,
            text: "Home"
        },

        {
            path: "/timeline",
            icon: <RiTimeLine />,
            text: "Timeline"
        },

        {
            path: "/stats",
            icon: <ImStatsDots />,
            text: "Stats"
        }
    ]

    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks.map((item, ind) => <MyLinks key={ind} href={item.path} icon={item.icon}>
                                {item.icon} {item.text}
                            </MyLinks>)
                        }


                    </ul>
                </div>
                <a className="font-extrabold text-3xl">Keen<span className="text-[#244D3F]">Keeper</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map((item, ind) => <MyLinks key={ind} href={item.path} icon={item.icon}>
                            {item.icon} {item.text}
                        </MyLinks>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default NavBar;