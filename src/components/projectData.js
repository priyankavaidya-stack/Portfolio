import { FaHtml5, FaCss3Alt, FaReact, FaFontAwesome } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import drawing from '../images/drawTool.png';
import calculator from '../images/calculator.png';

export const projectData = [
    {
        id: 1,
        imageUrl : drawing,
        projectUrl: "https://melodic-brigadeiros-e6537d.netlify.app/",
        title: "ColorCraft Canvas:",
        description: "ColorCraft Canvas is a feature-rich and user-friendly drawing tool app that empowers artists of all levels to unleash their creativity and craft captivating artworks. With an array of powerful drawing tools and a vibrant color palette at your fingertips, you can bring your imagination to life and create stunning designs effortlessly.",
        technology: "HTML, CSS, Javascript, FontAwesome",
        date: "Aug 2, 2023",
        icon1: <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2: <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3: <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4: <FaFontAwesome size='20' className="text-[#563d7c]" />
    },
    {
        id: 2,
        imageUrl: calculator,
        projectUrl: "https://adorable-horse-bf1256.netlify.app/",
        title: "Currency Converter",
        description: "The Currency Converter App is a web application built using React.js that allows users to quickly and easily convert between different currencies. It provides a user-friendly interface for converting any two currencies using up-to-date exchange rates.",
        technology: "HTML, CSS, Javascript, ReactJS, TailwindCSS, Vite",
        date: "Oct 8, 2023",
        icon1: <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2: <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3: <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4: <FaReact size='20' className="text-[#61DBFB]"/>,
        icon5: <SiTailwindcss size='20' className="text-[#0EA5E9]" />
    }
    ,
    {
        id: 3,
        imageUrl: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        projectUrl: "https://www.fixfd.com",
        title: "ShopCart",
        description: "A Mern Stack Shopping app. It gives users to add products to the cart, delete it from cart, also adding customisable quanitiy of products. Filter function gives the products a/c to user's choices.",
        technology: "HTML, CSS, Javascript, React-icons, React-Bootstrap",
        icon1:  <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2:  <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3:  <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4:  <FaReact size='20' className="text-[#61DBFB]"/>
    }
];

export default projectData;