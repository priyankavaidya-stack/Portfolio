import React from 'react';

const Resume1 = () => {
    return (
        <div className='timeline relative max-w-full my-[100px] mx-auto'>
            <div className='container py-[10px] px-[50px] relative w-[50%] bg-[rgba(0,0,0,0.3)]'>
                <div className='text-box py-[20px] px-[30px] bg-white relative rounded-md text-base'>
                    <h2 className='text-[#20c997]'>L&T Cloudfiniti</h2>
                    <small>2022 - 2023</small>
                    <ul className='list-disc text-sm'>
                        <li>Designed and developed a user portfolio page that offered a seamless and user-friendly experience for managing Fixed Deposits (FDs).</li>
                        <li>Implemented Create, Read, Update, and Delete (CRUD) functionality, allowing users to perform actions such as adding new FD bookings, editing existing details, and deleting outdated FD records.</li>
                        <li>Incorporated data validation checks to maintain data integrity and enhance the user experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume1;
