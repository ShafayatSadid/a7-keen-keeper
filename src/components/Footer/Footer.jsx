import Image from "next/image";
import instagram from '@/assets/instagram.png'
import facebook from '@/assets/facebook.png'
import twitter from '@/assets/twitter.png'

const Footer = () => {
    return (
        <div className="bg-[#244D3F] text-center text-[#ffffff]">

            {/* title */}
            <h1 className="text-[3.5rem] font-bold pt-20">KeenKeeper</h1>
            <p className="text-[1rem] mt-4">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            {/* Social Links */}
            <div className="mt-6">
                <h2 className="text-[1.25rem] font-medium ">Social Links</h2>

                <div className="flex justify-center items-center gap-3 mt-4">
                    <Image src={instagram} width={40} height={40} alt="Instagram Icon" />
                    <Image src={facebook} width={40} height={40} alt="Instagram Icon" />
                    <Image src={twitter} width={40} height={40} alt="Instagram Icon" />
                </div>
            </div>

            <hr className="max-w-[1110px] mx-auto mt-10 text-[#FAFAFA]/50 " />

            <div className="text-[1rem] text-[#FAFAFA]/50 mt-7.5 md:flex justify-between max-w-[1110px] mx-auto pb-7.5 px-1">
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex items-center gap-6 justify-center">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookies</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;