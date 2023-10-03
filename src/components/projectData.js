import { FaHtml5, FaCss3Alt, FaReact, FaFontAwesome } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import drawing from '../images/drawTool.png'

export const projectData = [
    {
        id: 1,
        imageUrl : drawing,
        projectUrl: "https://www.fixfd.com",
        title: "ColorCraft Canvas:",
        description: "ColorCraft Canvas is a feature-rich and user-friendly drawing tool app that empowers artists of all levels to unleash their creativity and craft captivating artworks. With an array of powerful drawing tools and a vibrant color palette at your fingertips, you can bring your imagination to life and create stunning designs effortlessly.",
        icon1:  <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2:  <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3: <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4: <FaFontAwesome size='20' className="text-[#563d7c]" />
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1654573817889-296cad084c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=862&q=80",
        projectUrl: "https://www.fixfd.com",
        title: "Flipkart Clone",
        description: "A Mern Stack flipkart clone adding ecommerce features.app that empowers artists of all levels to unleash their creativity and craft captivating artworks. With an array of powerful drawing tools and a vibrant color palette at your fingertips.",
        icon1:  <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2:  <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3:  <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4:  <FaReact size='20' className="text-[#61DBFB]"/>
    }
    ,
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1654573817889-296cad084c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=862&q=80",
        projectUrl: "https://www.fixfd.com",
        title: "Flipkart Clone",
        description: "A Mern Stack flipkart clone adding ecommerce features.app that empowers artists of all levels to unleash their creativity and craft captivating artworks. With an array of powerful drawing tools and a vibrant color palette at your fingertips, you can bring your imagination to life",
        icon1:  <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2:  <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3:  <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4:  <FaReact size='20' className="text-[#61DBFB]"/>
    }
];

export default projectData;