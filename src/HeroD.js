import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundCircles from './BackgroundCircles';
// import backgroundImage from './backgroundImage.jpg';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import profile from './img.jpg';

export default function Hero() {
    // eslint-disable-next-line
    const [text] = useTypewriter({
        words: [
            "Hi, I'm Priyanka Vaidya.",
            "I'm a Frontend Developer.",
            "<LovesToCodeMore />" 
        ],
        loop:true,
        delaySpeed:2000
    });
    return(
        // <div className='h-screen'
        // style={{
        //     backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat"
        //   }}>
        <motion.div
        initial={{
            opacity:0
        }}
        animate={{
            scale: [1,1], 
            opacity:[0.1,1]
        }}
        transition={{
            duration:2.5,
        }}
        className="bg-[#343a40] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover min-[991px]:hidden'
            src={profile} alt="" />
            <div className='z-20'>
                <h2 className='text-base uppercase text-white font-medium pb-5 tracking-[15px]'>
                    Welcome
                </h2>

                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#20c997' />
                </h1>

                <div className='pt-5'>
                    <a href="#about">
                        <button className='heroButton'>About</button>
                    </a>
                    <a href="#experience">
                        <button className='heroButton'>Experience</button>
                    </a>
                    <a href="#skills">
                        <button className='heroButton'>Skills</button>
                    </a>
                    <a href="#projects">
                        <button className='heroButton'>Projects</button>
                    </a>
                </div>
            </div>
        </motion.div>
        // </div>
    );
}