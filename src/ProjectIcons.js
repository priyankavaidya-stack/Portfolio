import React from 'react';

const ProjectIcon = ({ iconName }) => {
    return (
        <div className='feature flex items-center mr-5'>
            <div className='feature__circle flex justify-center items-center mr-1 h-[30px] w-[30px] bg-[#ececec] rounded-[50%] '>
                {iconName}
            </div>
        </div>
    );
}

export default ProjectIcon;