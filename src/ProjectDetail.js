import React from 'react';
import './ProjectDetail.css';


const ProjectDetail = ({children, close}) => {
    console.log("project overlay");
    return (
        // <div className='min-[991px]:ml-60'>
            <div className='overlay' onClick={close}>
                {children}
            </div>
        // </div>
    );
}

export default ProjectDetail;