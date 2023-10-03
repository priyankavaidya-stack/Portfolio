import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../images/backgroundImage.jpg';
import { Cursor,useTypewriter } from 'react-simple-typewriter';
import profile from '../images/img.jpg';

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
        <div
            className="relative overflow-hidden rounded-lg text-center h-screen w-full"
            style={{
                backgroundImage: `url(${backgroundImage})`,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"
        }}>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-screen w-full overflow-hidden bg-fixed"
                style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
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
                    className='container mx-auto min-[991px]:px-12'>
                    <div
                    className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
                        {/* <BackgroundCircles /> */}
                        <img className='relative rounded-full h-32 w-32 mx-auto object-cover min-[991px]:hidden'
                        src={profile} alt="" />
                        <div className='z-20'>
                            <h2 className='text-base uppercase text-white font-medium pb-5 tracking-[15px]'>
                                Welcome
                            </h2>

                            <h1 className='text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-semibold px-1'>
                                <span className='mr-3'>{text}</span>
                                <Cursor cursorColor='#20c997' />
                            </h1>

                            <div className='pt-5'>
                                <a href="#about">
                                    <button className='heroButton'>About</button>
                                </a>
                                <a href="#resume">
                                    <button className='heroButton'>Experience</button>
                                </a>
                                <a href="#skills">
                                    <button className='heroButton'>Skills</button>
                                </a>
                                <a href="#portfolio">
                                    <button className='heroButton'>Projects</button>
                                </a>
                            </div>
                        </div>
                        </div>
                </motion.div>

            </div>
        </div>   
    );
}