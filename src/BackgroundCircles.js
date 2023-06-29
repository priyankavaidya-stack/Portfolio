import React from 'react';

function BackgroundCircles () {
        return (
            <div className='relative flex justify-center items-center'>
                <div  className='absolute border border-[#465853] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
                {/* <div  className='border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 absolute'/> */}
                <div  className='border border-[#4b4949] rounded-full h-[500px] w-[500px] mt-52 absolute'/>
                <div  className='border border-[#20c997] opacity-20 rounded-full h-[650px] w-[650px] mt-52 absolute animate-pulse'/>
                <div  className='border border-[#4b4949] rounded-full h-[800px] w-[800px] mt-52 absolute'/>
            </div>
        );
}

export default BackgroundCircles;