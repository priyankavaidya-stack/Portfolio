import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const projectData = [
    {
        id: 1,
        imageUrl : "https://images.unsplash.com/photo-1516453734593-8d198ae84bcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        projectUrl: "https://www.fixfd.com",
        title: "TinDog",
        description: "A static dog shop website developed using html, css and javascript.",
        icon1:  <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2:  <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3: <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4: <FaBootstrap size='20' className="text-[#563d7c]" />
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1654573817889-296cad084c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=862&q=80",
        projectUrl: "https://www.fixfd.com",
        title: "Flipkart Clone",
        description: "A Mern Stack flipkart clone adding ecommerce features.",
        icon1:  <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2:  <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3:  <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4:  <FaReact size='20' className="text-[#61DBFB]"/>
    }
];

export default projectData;