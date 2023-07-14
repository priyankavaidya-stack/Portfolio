import React from 'react';
import ProjectIcon from './ProjectIcons';

const Listing = ({data,open}) => {
    const {imageUrl, title, description, icon1, icon2, icon3, icon4  } = data;

    return (
        <div className='listing' onClick={open}>
            <div className='listing__content absolute left-0 top-0 w-full bg-white rounded-xl overflow-hidden'>
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
            </div>
        </div>
    );
}

export default Listing;