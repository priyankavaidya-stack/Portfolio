import { BsPersonWorkspace, BsPersonVcardFill, BsGithub, BsLinkedin} from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { SiAboutdotme }  from 'react-icons/si';
import { MdWork }  from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { motion } from 'framer-motion';
import image from './img.jpg';


const Sidebar = () => {
    const [open,setOpen] = useState(false);

    const menuLinks = [
        { name: "Home", link: "#home", icon:<FaHome size='20' /> },
        { name: "About Me", link: "#about", icon:<SiAboutdotme size='20' /> },
        { name: "What I Do", link: "#whatIdo", icon:<BsPersonWorkspace size='20' />},
        { name: "Resume", link: "#resume", icon:<BsPersonVcardFill size='20' /> },
        { name: "Porfolio", link: "#portfolio", icon:<MdWork size='20' /> }
        // { name: "Contact", link: "#contact", icon:<FaPhoneAlt size='20' /> }
    ];
 
    return (
        <div>
            <div className='min-[991px]:block hidden fixed top-0 left-0 h-screen w-60 m-0 flex-col bg-[#111418] text-white shadow-lg'>

                <div>
                    <SideBarImg profile={<img className='profile' alt="priyanka" src={image} />} />
                </div>

                {menuLinks.map((item,index)=>(
                    <SideBarItem key={index} icon={item.icon} text={item.name} link={item.link} />
                ))}

            </div>
           
            {/* hamburger and social media icons */}
            <div className='fixed top-0 z-[999] w-full min-[991px]:hidden bg-[#111418]'>
                <div
                    className={`flex justify-between ${
                        open ? "relative text-white right-0" : "text-white"
                    } text-3xl min-[991px]:hidden p-5`}
                >
                    <motion.div
                    initial={{
                        x:-500,
                        opacity:0,
                        scale:0.5
                    }}
                    animate={{
                        x:0,
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:1
                    }}>
                    <h1 className='text-5 text-white text-center mb-0 d-lg-block font-medium text-xl'>Priyanka Vaidya</h1>
                    </motion.div>

                    <motion.div 
                    initial={{
                        x:500,
                        opacity:0,
                        scale:0.5
                    }}
                    animate={{
                        x:0,
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:1
                    }}
                    className='flex items-center'>
                        <div className='flex items-center mr-2'>
                            <BsLinkedin className='m-2' size={14} color='#aab1b8' />
                            <BsGithub className='m-2' size={14} color='#aab1b8' />
                        </div>
                        <RxHamburgerMenu onClick={() => setOpen(!open)}/>
                    </motion.div>
                    
                </div>
            </div>

           {/* Submenu toggle mobile device */}
            <div
                className={`min-[991px]:hidden text-white w-full mt-16 pt-1
                font-normal bg-black bg-opacity-95 top-0 ${
                    open ? "fixed z-[999]" : "absolute top-[-100%]"
                }`}
            >
            <ul className="flex flex-col justify-center mt-2 gap-1 text-base">
                {menuLinks?.map((menu, i) => (
                <li
                    onClick={() => setOpen(false)}
                    key={i}
                    className="flex items-center mx-5 py-1 border-b border-gray-800"
                >
                    <div className='sidebar-icon ml-0'>
                        {menu.icon}
                    </div>
                    <a  href={menu?.link} className='hover:text-[#20c997] transition-all duration-200 ease-linear'>
                        {menu?.name}
                    </a>
                </li>
                ))}
            </ul>
            </div>

        </div>
    );
};

const SideBarImg = ({profile}) => (
    <div className='sidebar-profile'>
        <div className='sidebar-img'>
                {profile}
        </div>
        <h1 className='text-5 text-white text-center mb-0 d-lg-block font-medium text-xl'>Priyanka Vaidya</h1>
    </div>
);


const SideBarItem = ({icon, text, link}) => (
    <div className="sidebar-item">
        <div className='sidebar-icon'>
            {icon}
        </div>
        <span className='sidebar-text'>
            <a  href={link} className='hover:text-[#20c997] transition-all duration-200 ease-linear'>
                {text}
            </a>
        </span>
    </div>
);
export default Sidebar;