import React from 'react';
import { FaPencilRuler, FaDesktop, FaLaptopCode, FaServer } from 'react-icons/fa'

const Services = () => {
    return(
        <div className='min-[991px]:ml-60'>
            <section id="whatIdo" className='bg-[#343a40] py-16 dark:bg-[#F8F9FA]'>
                <div className='container mx-auto min-[991px]:px-12'>

                    {/* services heading feature */}
                    <div className='relative items-center justify-center text-center mb-5 flex mx-3'>
                        <h2 className='uppercase text-[#ffffff80] mb-0 xl:text-[8.25rem] text-[calc(1.95rem_+_8.4vw)] font-semibold w-full opacity-10 dark:text-[#929494]'>
                            Services
                        </h2>
                        <p className='absolute text-white font-semibold text-4xl w-full mb-0 self-center mt-7 dark:text-[#212529]'>
                            What I Do
                            <span className='border-[#20c997] w-20 mx-auto border-1 border-b-4 block mt-2'></span>
                        </p>
                    </div>

                    {/* services we offer as work feature */}
                    {/* min-[991px]:text-left max-[991px]:text-center mx-3 */}
                    <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mt-12">
                        <div className="col-span-12 min-[991px]:mx-9">
                            <div className='grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12'>
                                <div className='max-[990px]:col-span-6 min-[991px]:col-span-6 max-[768px]:col-span-12 mx-3'>
                                    <div className='featured-box relative mb-12 pl-[90px] pt-0'>
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] dark:bg-white'>
                                            <FaLaptopCode />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5 dark:text-[#252B33]'>Front End Development</h3>
                                        <p className='mb-0 text-[#ffffff80] dark:text-[#4C4D4D]'>
                                        As a front-end developer, I put my knowledge and experience in building responsive layouts, optimizing performance, or ensuring web accessibility. Explore my portfolio to see examples of my work.
                                        </p>
                                    </div>
                                </div>
                                <div className='max-[990px]:col-span-6 min-[991px]:col-span-6 max-[768px]:col-span-12 mx-3'>
                                    <div className='featured-box relative mb-12 pl-[90px] pt-0'>
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] dark:bg-white'>
                                            <FaDesktop />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5 dark:text-[#252B33]'>Web Design</h3>
                                        <p className='mb-0 text-[#ffffff80] dark:text-[#4C4D4D]'>I have a growing interest in web design and am excited to learn and explore more in this field. I enjoy experimenting with design concepts and creating simple web layouts.</p>
                                    </div>
                                </div>
                                <div className='max-[990px]:col-span-6 min-[991px]:col-span-6 max-[768px]:col-span-12 mx-3'>
                                    <div className='featured-box relative mb-12 pl-[90px] pt-0'>
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] dark:bg-white'>
                                            <FaServer />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5 dark:text-[#252B33]'>Back End Development</h3>
                                        <p className='mb-0 text-[#ffffff80] dark:text-[#4C4D4D]'>I have a working knowledge of back-end development. My experience includes working with technologies such as Node.js and Express, allowing me to bridge the gap between front-end and back-end development.</p>
                                    </div>
                                </div>
                                <div className='max-[990px]:col-span-6 min-[991px]:col-span-6 max-[768px]:col-span-12 mx-3'>
                                    <div className='featured-box relative mb-12 pl-[90px] pt-0'>
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] dark:bg-white'>
                                            <FaPencilRuler />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5 dark:text-[#252B33]'>UI/UX Design</h3>
                                        <p className='mb-0 text-[#ffffff80] dark:text-[#4C4D4D]'>
                                            I enjoy turning complex problems into simple, beautiful and intuitive designs.
                                            I start with research, ideation, wireframing, prototyping, and testing.
                                            I focus on responsive design, user-centered approach and problem solving.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Services;