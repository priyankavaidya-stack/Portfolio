import React from 'react';
import { FaPencilRuler, FaDesktop, FaLaptopCode, FaServer } from 'react-icons/fa'

const Services = () => {
    return(
        <div className='min-[991px]:ml-60'>
            <section id="services" className='bg-[#343a40] py-16'>
                <div className='container mx-auto min-[991px]:px-12'>

                    {/* services heading feature */}
                    <div className='relative items-center justify-center text-center mb-5 flex mx-3'>
                        <h2 className='uppercase text-[#ffffff80] mb-0 xl:text-[8.25rem] text-[calc(1.95rem_+_8.4vw)] font-semibold w-full opacity-10'>
                            Services
                        </h2>
                        <p className='absolute text-white font-semibold text-4xl w-full mb-0 self-center mt-7'>
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
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]'>
                                            <FaLaptopCode />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5'>Front End Development</h3>
                                        <p className='mb-0 text-[#ffffff80]'>2 making it over 2000 years old. Richard McClintock, a Latin professor at he more obscure Latin words, a Latin professor at he more obscure Latin words</p>
                                    </div>
                                </div>
                                <div className='max-[990px]:col-span-6 min-[991px]:col-span-6 max-[768px]:col-span-12 mx-3'>
                                    <div className='featured-box relative mb-12 pl-[90px] pt-0'>
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]'>
                                            <FaDesktop />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5'>Web Design</h3>
                                        <p className='mb-0 text-[#ffffff80]'>2 making it over 2000 years old. Richard McClintock, a Latin professor at he more obscure Latin words, a Latin professor at he more obscure Latin words</p>
                                    </div>
                                </div>
                                <div className='max-[990px]:col-span-6 min-[991px]:col-span-6 max-[768px]:col-span-12 mx-3'>
                                    <div className='featured-box relative mb-12 pl-[90px] pt-0'>
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]'>
                                            <FaServer />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5'>Back End Development</h3>
                                        <p className='mb-0 text-[#ffffff80]'>2 making it over 2000 years old. Richard McClintock, a Latin professor at he more obscure Latin words, a Latin professor at he more obscure Latin words</p>
                                    </div>
                                </div>
                                <div className='max-[990px]:col-span-6 min-[991px]:col-span-6 max-[768px]:col-span-12 mx-3'>
                                    <div className='featured-box relative mb-12 pl-[90px] pt-0'>
                                        <div className='flex absolute left-0 top-0 mb-0 h-[70px] w-[70px] text-3xl items-center justify-center text-center text-[#20c997] bg-[#212529] rounded-md shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]'>
                                            <FaPencilRuler />
                                        </div>
                                        <h3 className='text-[20px] text-white font-medium mb-2.5 leading-5'>UI/UX Design</h3>
                                        <p className='mb-0 text-[#ffffff80]'>2 making it over 2000 years old. Richard McClintock, a Latin professor at he more obscure Latin words, a Latin professor at he more obscure Latin words</p>
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