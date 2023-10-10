import React from 'react';
import ProjectIcon from './ProjectIcons';

const Listing = ({data,open}) => {
    const {imageUrl, title, description, icon1, icon2, icon3, icon4, icon5  } = data;
    var desc = description.slice(0,100) + `.....read more`;
    return (
                    <div className='text-white rounded-md p-6 mb-6 bg-[#111418] dark:bg-[#20C997] dark:border dark:border-[#eaeaea]' onClick={open}>
                        <div className='listing__image-container w-full h-[65%] overflow-hidden'>
                            <img className='listing__image w-full h-full object-cover' src={imageUrl} alt='project1' />
                        </div>
                        <div className=' flex flex-col justify-evenly items-start h-[35%]'>
                            <h3 className='text-white text-[21px] mb-2 mt-3'>{title}</h3>
                            <p className='text-[#20c997] mb-4 dark:text-white'>{desc}</p>
                            <div className='mb-0 text-[#ffffff80] leading-[1.8] flex items-center'>
                                <ProjectIcon iconName={icon1} />
                                <ProjectIcon iconName={icon2} />
                                <ProjectIcon iconName={icon3} />
                                <ProjectIcon iconName={icon4} />
                                {icon5 ? <ProjectIcon iconName={icon5} /> : '' }  
                            </div>
                        </div>
                    </div>
    );
}

export default Listing;