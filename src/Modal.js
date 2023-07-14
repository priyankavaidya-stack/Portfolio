import React from 'react';
import ProjectIcon from './ProjectIcons';
import {HiX} from 'react-icons/hi';

const Modal = ({data,close}) => {
    const {imageUrl, title, description, icon1, icon2, icon3, icon4  } = data;

    return (
        <div className='modal min-[991px]:w-[800px] min-[1201px]:w-[1140px] max-[768px]:w-[500px] border border-solid border-[#0000002d] rounded-lg text-[#dee3e4] bg-[#343a40]'>
            <div className='modal__body flex flex-col p-4'>
                <div>
                <button className='float-right cursor-pointer border-0 rounded-md box-content h-4 opacity-[0.5] p-1 w-4 content-center items-center'>
                    <HiX size='18' />
                </button>
                </div>
                <div className='container my-1 mx-auto relative'>
                    <h2 className='text-2xl font-semibold text-center mb-6 text-white'>{title}</h2>
                    <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12">
                        <div className="md:col-span-12 min-[991px]:col-span-7 max-[991px]:text-center mx-3">
                            <img className='modal__image w-full h-full object-cover rounded-[20px]' alt="tindog" src={imageUrl} />
                        </div>
                        <div className="md:col-span-12 min-[991px]:col-span-5 mx-3 mt-1">
                            <div className='modal__info'>
                                {/* <div className='modal__row'> */}
                                    <h4 className='modal__title text-lg font-semibold text-white'>Project Info:</h4>
                                {/* </div> */}
                                {/* <div className='modal__row'> */}
                                    <p className='modal__desc leading-[1.8] text-[#DEE3E4]'>{description}</p>
                                {/* </div> */}
                                <h4 className='modal__title text-lg font-semibold mt-6 text-white'>Project Details:</h4>
                                <ul className='p-0'>
                                    <li className='py-3 border-b border-solid border-[#fafafa1f]'><span className='mr-2'>Technologies:</span>HTML, CSS, Javascript, Bootstrap</li>
                                    <li className='py-3 border-b border-solid border-[#fafafa1f]'><span className='mr-2'>Date:</span>July 10, 2020</li>
                                    <li className='py-3 border-b border-solid border-[#fafafa1f]'><span className='mr-2'>URL:</span>gtf</li>
                                </ul>

                                <div className='modal__row flex items-center text-left my-5'>
                                    <ProjectIcon iconName={icon1} />
                                    <ProjectIcon iconName={icon2} />
                                    <ProjectIcon iconName={icon3} />
                                    <ProjectIcon iconName={icon4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    );
}


export default Modal;