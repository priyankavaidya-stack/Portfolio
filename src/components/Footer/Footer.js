import React from 'react';

const Footer = () => {
    return (
        <div className='min-[991px]:ml-60'>
        <section id="footer" className='bg-[#212529] text-[#fafafacc] py-[4.125rem] overflow-hidden relative dark:bg-white'>
            <div className='container mx-auto min-[991px]:px-12'>
                <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 gap-4">
                    <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3 max-[768px]:text-center dark:text-[#252B33]">
                        <p>
                            Copyright © 2023
                        <a href="#home" className='font-medium text-[#20c997] hover:transition-all duration-200 ease-linears'> Priyanka</a>
                        . All Rights Reserved.
                        </p>
                    </div>
                    <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3 flex justify-center min-[768px]:justify-end dark:text-[#252B33]">
                        <p className='pr-3'>Terms & Policy</p>
                        <p className='pl-3'>Disclaimer</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Footer;