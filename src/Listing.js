import React from 'react';
import ProjectIcon from './ProjectIcons';

const Listing = ({data,open}) => {
    const {imageUrl, title, description, icon1, icon2, icon3, icon4  } = data;

    return (
        // <div className='listing' onClick={open}>
            /* <div className='listing__content absolute left-0 top-0 w-full bg-white rounded-xl overflow-hidden'>
                <div className='listing__image-container w-full h-[65%] overflow-hidden'>
                    <img className='listing__image w-full h-full object-cover' src={imageUrl} alt='project1' />
                </div>
                <div className='listing__details relative flex flex-col justify-evenly items-start px-6 h-[35%]'>
                    <div className='listing__row'>
                        <span className='listing__title text-2xl'>{title}</span>
                    </div>
                    <div className='listing__row'>
                        <span className='listing__desc text-[#737373]'>{description}</span>
                    </div>
                    <div className='listing__row'>
                        <ProjectIcon iconName={icon1} />
                        <ProjectIcon iconName={icon2} />
                        <ProjectIcon iconName={icon3} />
                        <ProjectIcon iconName={icon4} />
                    </div>
                </div>
            </div> */

                  
            // <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mt-12 gap-4">
                // <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                    /* <h2 className='text-[1.5rem] font-semibold mb-4 text-white'>My Education</h2> */
                    <div className='text-white rounded-md p-6 mb-6 bg-[#111418]' onClick={open}>
                        {/* <p className='bg-[#20c997] rounded-md py-[0.55em] px-[0.85em] leading-none font-semibold text-lg w-fit mb-3 absolute top-[-10px]'>Front End</p> */}
                        <div className='listing__image-container w-full h-[65%] overflow-hidden'>
                            <img className='listing__image w-full h-full object-cover' src={imageUrl} alt='project1' />
                        </div>
                        <div className=' flex flex-col justify-evenly items-start h-[35%]'>
                            <h3 className='text-white text-[21px] mb-2 mt-3'>{title}</h3>
                            <p className='text-[#20c997] mb-4'>{description}</p>
                            <div className='mb-0 text-[#ffffff80] leading-[1.8] flex items-center'>
                                <ProjectIcon iconName={icon1} />
                                <ProjectIcon iconName={icon2} />
                                <ProjectIcon iconName={icon3} />
                                <ProjectIcon iconName={icon4} />
                            </div>
                        </div>
                    </div>
                // </div>
                // <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                //     <h2 className='text-[1.5rem] font-semibold mb-4 text-white'>My Experience</h2>
                //     <div className='text-white rounded-md p-6 mb-6 bg-[#111418]'>
                //         <p className='bg-[#20c997] rounded-md py-[0.35em] px-[0.65em] leading-none font-normal text-sm w-fit mb-3'>2022 - Present</p>
                //         <h3 className='text-white text-[21px] mb-2'>Graduate Engineer Trainee</h3>
                //         <p className='text-[#20c997] mb-4'>L&T-Cloudfiniti</p>
                //         <p className='mb-0 text-[#ffffff80] leading-[1.8]'>
                //             Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                //         </p>
                //     </div>
                // </div>
            // </div>



        // </div>
    );
}

export default Listing;