import React from 'react';

const ProjectIcon = ({ iconName }) => {
    return (
        <div className='feature flex items-center mr-2'>
            <div className='feature__circle flex justify-center items-center h-[30px] w-[30px] bg-[#ececec] rounded-[50%] '>
                {iconName}
            </div>
        </div>
    );
}

export default ProjectIcon;