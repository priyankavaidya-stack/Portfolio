import { FaHtml5, FaCss3Alt, FaReact, FaFontAwesome } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import drawing from '../images/drawTool.png';
import calculator from '../images/calculator.png';
import fixfdImg from '../images/fixfdImage.png';
import pdfSlice from '../images/pdfSlice.jpg';

export const projectData = [
    {
        id: 1,
        imageUrl: fixfdImg,
        projectUrl: "https://www.fixfd.com",
        title: "FixFD",
        description: "A financial banking web application which provides instant Interest Rate information and Real-Time updates on 130+ banks from the RBI Scheduled Commercial Bank (SCB) list. With a simple search, you can find the details of all the banks you need in a single click, by performing a simple comparison with other banks' FD rates, you can easily identify the Highest Annual Percentage Rates (APR) and Annual Percentage Yields (APY), in addition to other FD features. With APY FD Calculator, you can see the exact returns of specific banks' Fixed Deposits, calculated not just using APR and also by APY.",
        technology: "ReactJS, Redux, NodeJS, Express, Rest API, Bootstrap, MySQL, Git, Cheerio, Puppeteer",
        date: "Sep 2022 - Oct 2023",
        icon1:  <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2:  <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3:  <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4:  <FaReact size='20' className="text-[#61DBFB]"/>
    },
    {
        id: 2,
        imageUrl: pdfSlice,
        projectUrl: "https://github.com/priyankavaidya-stack/PDFSlice",
        title: "PDFSlice",
        description: "PDFSlice is a web application that allows users to upload PDF files and selectively extract pages to create new PDF documents. With PDFSlice, users can easily select specific pages from their PDF files and generate a new PDF document containing only the desired pages.",
        technology: "HTML, CSS, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, Pdf-lib, react-pdf, TailwindCSS, Vite",
        date: "Oct, 2023",
        icon1: <FaHtml5 size='20' className="text-[#e34c26]" />,
        icon2: <FaCss3Alt size='20' className="text-[#264de4]" />,
        icon3: <IoLogoJavascript size='20' className="text-[#323330]" />,
        icon4: <FaReact size='20' className="text-[#61DBFB]"/>,
        icon5: <SiTailwindcss size='20' className="text-[#0EA5E9]" />
    },
    {
        id: 3,
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
        id: 4,
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
];

export default projectData;