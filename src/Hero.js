import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import BackgroundCircles from './BackgroundCircles';
import backgroundImage from './backgroundImage.jpg';
import { Cursor,useTypewriter } from 'react-simple-typewriter';
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
        // <div className='hero-wrap overflow-hidden relative'>
        //     <div className='hero-mask'>
        //         <div className='hero-bg h-screen transition-all duration-300 ease-linear z-0 bg-[#343a40]'
        //            style={{
        //             backgroundImage: `url(${backgroundImage})`, backgroundPosition:"50%",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"
        //           }}
        //         >

                /* <motion.div
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
                        className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
                            {/* <BackgroundCircles /> */
                        //     <img className='relative rounded-full h-32 w-32 mx-auto object-cover min-[991px]:hidden'
                        //     src={profile} alt="" />
                        //     <div className='z-20'>
                        //         <h2 className='text-base uppercase text-white font-medium pb-5 tracking-[15px]'>
                        //             Welcome
                        //         </h2>

                        //         <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                        //             <span className='mr-3'>{text}</span>
                        //             <Cursor cursorColor='#20c997' />
                        //         </h1>

                        //         <div className='pt-5'>
                        //             <a href="#about">
                        //                 <button className='heroButton'>About</button>
                        //             </a>
                        //             <a href="#experience">
                        //                 <button className='heroButton'>Experience</button>
                        //             </a>
                        //             <a href="#skills">
                        //                 <button className='heroButton'>Skills</button>
                        //             </a>
                        //             <a href="#projects">
                        //                 <button className='heroButton'>Projects</button>
                        //             </a>
                        //         </div>
                        //     </div>
                        // </motion.div> */}
                    // {/* </div>
                    // </div> */}



                
<div
  className="relative overflow-hidden rounded-lg text-center h-screen w-full"
  style={{
    backgroundImage: `url(${backgroundImage})`,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"
  }}>
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-screen w-full overflow-hidden bg-fixed"
    style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
    {/* <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
        <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light">
          Call to action
        </button>
      </div>
    </div> */}
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
        className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            {/* <BackgroundCircles /> */}
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

  </div>
</div>


            //   </div>
          


        // <div className='h-screen'
        // style={{
        //     backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat"
        //   }}>
    //    motion.div here 
        // </div>


        
    );
}