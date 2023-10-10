import React from "react";
import projectData from './projectData';
import Card from "./Card";

const Portfolio = () => {

    return(
        <div className='min-[991px]:ml-60'>
            <section id="portfolio" className='bg-[#343a40] py-16 dark:bg-[#F8F9FA]'>
                <div className='container mx-auto min-[991px]:px-12'>
                    {/* portfolio heading feature */}
                    <div className='relative items-center justify-center text-center mb-5 flex mx-3'>
                        <h2 className='uppercase text-[#ffffff80] mb-0 xl:text-[8.25rem] text-[calc(1.95rem_+_8.4vw)] font-semibold w-full opacity-10 dark:text-[#929494]'>
                            Portfolio
                        </h2>
                        <p className='absolute text-white font-semibold text-4xl w-full mb-0 self-center mt-7 dark:text-[#212529]'>
                            My Work
                            <span className='border-[#20c997] w-20 mx-auto border-1 border-b-4 block mt-2'></span>
                        </p>
                    </div>
                    <div className="properties flex flex-row flex-wrap justify-center">
                        <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mt-4 gap-4">
                        {projectData.map((item) => (
                                <Card key={item.id} data={item}/>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;