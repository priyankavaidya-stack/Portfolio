import React from 'react';

const About = () => {
    return(
        <div className='min-[991px]:ml-60'>
            <section id="about" className='bg-[#212529] py-16'>
                <div className='container mx-auto min-[991px]:px-12'>

                    {/* about me heading feature */}
                    <div className='relative items-center justify-center text-center mb-5 flex mx-3'>
                        <h2 className='uppercase text-[#6c757d] xl:text-[8.25rem] text-[calc(1.95rem_+_8.4vw)] font-semibold w-full mb-0 opacity-10'>About Me</h2>
                        <p className='absolute text-white font-semibold text-4xl w-full mb-0 self-center mt-7'>
                            Know Me More
                            <span className='border-[#20c997] w-20 mx-auto border-1 border-b-4 block mt-2'></span>
                        </p>
                    </div>

                    {/* about personal info feature */}
                    <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 mt-12">
                        <div className="md:col-span-12 min-[991px]:col-span-7 xl:col-span-8 min-[991px]:text-left max-[991px]:text-center mx-3">
                            <h2 className='text-[1.75rem] font-semibold mb-3 text-white'>I'm <span className='text-[#20c997]'>Priyanka Vaidya,</span> a Web Developer</h2>
                            <p className='text-[#ffffff80] leading-[1.8]'>I help you build brand for your business at an affordable price.
                               Thousands of clients have procured exceptional results while working with our dedicated team.
                               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className='text-[#ffffff80] leading-[1.8] mb-4'>Delivering work within time and budget which meets client’s requirements is our moto.
                                Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
                            </p>
                        </div>
                        <div className="md:col-span-12 min-[991px]:col-span-5 xl:col-span-4 mx-3">
                            <div className='min-[991px]:pl-6'>
                                <ul className='p-0 text-[#dee3e4] mb-4'>
                                    <li className='py-3 border-b border-[#fafafa1f]'>
                                        <span className='font-semibold mr-2'>
                                            Name:
                                        </span>
                                        Priyanka Vaidya
                                    </li>
                                    <li className='py-3 border-b border-[#fafafa1f]'>
                                        <span className='font-semibold mr-2'>
                                        Email:
                                        </span>
                                        <span className='text-[#20c997] w-fit'>vaidyapriyanka80@gmail.com</span>
                                    </li>
                                    <li className='py-3 border-b border-[#fafafa1f]'>
                                        <span className='font-semibold mr-2'>
                                            Age:
                                        </span>
                                        23
                                    </li>
                                    <li className='py-3 border-0'>
                                        <span className='font-semibold mr-2'>
                                            From:
                                        </span>
                                        Nagpur, Maharashtra
                                    </li>
                                </ul>
                                <button className='btn btn-blue rounded-full bg-[#20c997] border-[#20c997] border-2 shadow-[0_5px_15px_rgba(0,0,0,0.15)]" text-white py-[0.8rem] px-[2.6rem] font-mediums hover:transition-all duration-500 ease-linear max-[639px]:py-[0.81rem] max-[639px]:px-[2rem]'>Download CV</button>
                            </div>
                        </div>
                    </div>

                    {/* about numbers box feature */}
                    <div className='mt-12 overflow-hidden'>
                        <div className='grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mx-3'>
                            <div className='max-[990px]:col-span-3 min-[991px]:col-span-3 max-[639px]:col-span-6 py-5 pr-3 relative border-r border-b border-dotted border-[#fafafa26]'>
                                <div className='text-center'>
                                    <h4 className='text-[calc(1.425rem_+_2.1vw)] min-[1200px]:text-5xl text-[#ffffff80] font-medium mb-2.5'>
                                        <span>3</span>
                                        +
                                    </h4>
                                    <p className='mb-0 text-[#dee3e4]'>Years Experience</p>
                                </div>
                            </div>
                            <div className='max-[990px]:col-span-3 min-[991px]:col-span-3 max-[639px]:col-span-6 py-5 px-3 max-[639px]:pr-0 relative border-r border-b border-dotted border-[#fafafa26] max-[639px]:border-r-0'>
                            <div className='text-center'>
                                    <h4 className='text-[calc(1.425rem_+_2.1vw)] min-[1200px]:text-5xl text-[#ffffff80] font-medium mb-2.5'>
                                        <span>250</span>
                                        +
                                    </h4>
                                    <p className='mb-0 text-[#dee3e4]'>Happy Clients</p>
                                </div>
                            </div>
                            <div className='max-[990px]:col-span-3 min-[991px]:col-span-3 max-[639px]:col-span-6 py-5 px-3 max-[639px]:pl-0 relative border-r border-b border-dotted border-[#fafafa26] max-[639px]:border-b-0'>
                            <div className='text-center'>
                                    <h4 className='text-[calc(1.425rem_+_2.1vw)] min-[1200px]:text-5xl text-[#ffffff80] font-medium mb-2.5'>
                                        <span>10</span>
                                        +
                                    </h4>
                                    <p className='mb-0 text-[#dee3e4]'>Projects Done</p>
                                </div>
                            </div>
                            <div className='max-[990px]:col-span-3 min-[991px]:col-span-3 max-[639px]:col-span-6 py-5 pl-3 relative border-b border-[#fafafa26] max-[639px]:border-b-0'>
                            <div className='text-center'>
                                    <h4 className='text-[calc(1.425rem_+_2.1vw)] min-[1200px]:text-5xl text-[#ffffff80] font-medium mb-2.5'>
                                        <span>38</span>
                                    </h4>
                                    <p className='mb-0 text-[#dee3e4]'>Get Awards</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;