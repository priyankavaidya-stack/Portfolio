import React from 'react';

const Resume = () => {
    return(
        <div className='min-[991px]:ml-60'>
             <section id="resume" className='bg-[#212529] py-16'>
                <div className='container mx-auto min-[991px]:px-12'>

                    {/* about me heading feature */}
                    <div className='relative items-center justify-center text-center mb-5 flex mx-3'>
                            <h2 className='uppercase text-[#6c757d] xl:text-[8.25rem] text-[calc(1.95rem_+_8.4vw)] font-semibold w-full mb-0 opacity-10'>Summary</h2>
                            <p className='absolute text-white font-semibold text-4xl w-full mb-0 self-center mt-7'>
                                Resume
                                <span className='border-[#20c997] w-20 mx-auto border-1 border-b-4 block mt-2'></span>
                            </p>
                    </div>

                     {/* about personal info feature */}
                    <h2 className='text-[1.5rem] font-semibold mb-4 ml-3 text-white'>My Experience</h2>
                    <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mt-3 gap-4">
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <div className='text-white rounded-md p-6 mb-6 bg-[#111418]'>
                                <p className='bg-[#20c997] rounded-md py-[0.35em] px-[0.65em] leading-none font-normal text-sm w-fit mb-3'>July 2023 - Present</p>
                                <h3 className='text-white text-[21px] mb-2'>Senior Engineer</h3>
                                <div className='flex justify-between'>
                                    <p className='text-[#20c997] mb-4'>L&T-Cloudfiniti</p>
                                    <p className='text-[#ffffff80] mb-4'>
                                        Location: Mumbai, MH
                                    </p>
                                </div>
                                <div>
                                    <p className='text-[#20c997] mb-4'>Project: <a className='hover:text-[#ffffff80]' href="https://www.fixfd.com">FixFD</a></p>
                                    <p className='text-[#ffffff80] mb-2'>
                                        Responsibilities and Achievements:
                                    </p>
                                    <p className='text-[#ffffff80] mb-4'>
                                        <ul className='expList'>
                                            <li>
                                                Designed and developed a user portfolio page that offered a seamless and user-friendly experience for managing Fixed Deposits (FDs).
                                            </li>
                                            <li>
                                                Implemented Create, Read, Update, and Delete (CRUD) functionality, allowing users to perform actions such as adding new FD bookings, editing existing details, and deleting outdated FD records.
                                            </li>
                                            <li>
                                                Incorporated data validation checks to maintain data integrity and enhance the user experience.
                                            </li>
                                        </ul>
                                        </p>
                                </div>
                                <p className='mb-0 text-[#ffffff80] leading-[1.8]'>
                                    <p className='text-[#20c997]'>Skills Developed:</p>Javascript, Jquery, ReactJs, Redux, React-Bootstrap, TailwindCss, SQL, Client-Side, Server-Side Rendering
                                </p>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <div className='text-white rounded-md p-6 mb-6 bg-[#111418]'>
                                <p className='bg-[#20c997] rounded-md py-[0.35em] px-[0.65em] leading-none font-normal text-sm w-fit mb-3'>July 2022 - June 2023</p>
                                <h3 className='text-white text-[21px] mb-2'>Graduate Engineer Trainee</h3>
                                <div className='flex justify-between'>
                                    <p className='text-[#20c997] mb-4'>L&T-Cloudfiniti</p>
                                    <p className='text-[#ffffff80] mb-4'>
                                        Location: Mumbai, MH
                                    </p>
                                </div>
                                <div>
                                    <p className='text-[#20c997] mb-4'>Project: <a className='hover:text-[#ffffff80]' href="https://www.fixfd.com">FixFD</a></p>
                                    <p className='text-[#ffffff80] mb-2'>
                                        Responsibilities and Achievements:
                                    </p>
                                    <p className='text-[#ffffff80] mb-4'>
                                        <ul className='expList'>
                                            <li>
                                                Collaborated with the design team to ensure the user interface (UI) was intuitive, responsive, and visually appealing.
                                            </li>
                                            <li>
                                                Developed and implemented an individual bank page providing all fd rates of selected bank.
                                            </li>
                                            <li>
                                                Implemented web scraping techniques to gather and display up-to-date FD data directly from bank websites, ensuring accurate and real-time information for users.
                                            </li>
                                        </ul>
                                        </p>
                                </div>
                                <p className='mb-0 text-[#ffffff80] leading-[1.8]'>
                                    <p className='text-[#20c997]'>Skills Developed:</p> HTML, CSS, Javascript, Bootstrap, NodeJS, Express, SQL, ReactJS, Web Scrapping, CronJob, Puppeteer, Cheerio
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mt-8 gap-4">
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <h2 className='text-[1.5rem] font-semibold mb-4 text-white'>My Education</h2>
                            <div className='text-white rounded-md p-6 mb-4 bg-[#111418]'>
                                <p className='bg-[#20c997] rounded-md py-[0.35em] px-[0.65em] leading-none font-normal text-sm w-fit mb-3'>2018 - 2022</p>
                                <h3 className='text-white text-[21px] mb-2'>Bachelor of Technology in Computer Science</h3>
                                <p className='text-[#20c997] mb-4'>Government College of Engineering, Aurangabad.</p>
                                <p className='mb-0 text-[#ffffff80] leading-[1.8]'>
                                    CGPA: 8.9
                                </p>
                                <p className='mb-0 text-[#ffffff80] leading-[1.8]'>
                                    Location : Aurangabad, MH, IN
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skills section */}
                    <h2 className='text-2xl font-semibold mt-6 mx-3 text-white' id="skills">My Skills</h2>
                    <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mt-6 gap-4">
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>Html/Css
                                <span className='float-right'>95%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[95%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>Javascript
                                <span className='float-right'>75%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[75%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>React Js
                                <span className='float-right'>70%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[70%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>Redux
                                <span className='float-right'>55%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[55%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>Tailwind CSS
                                <span className='float-right'>75%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[75%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>Bootstrap
                                <span className='float-right'>90%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[90%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>SQL
                                <span className='float-right'>70%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[70%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>MongoDB
                                <span className='float-right'>60%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[60%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>Web Design
                                <span className='float-right'>65%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[65%] rounded-s"></div>
                            </div>
                        </div>
                        <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3">
                            <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>Figma
                                <span className='float-right'>70%</span>
                            </p>
                            <div className='bg-[#111418] h-2 rounded-md'>
                                <div className="bg-[#20c997] h-2 w-[65%] rounded-s"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Resume;