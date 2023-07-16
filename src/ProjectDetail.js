import React from 'react';


const ProjectDetail = ({children, close}) => {
    return (
            <div className='overlay' onClick={close}>
                {children}
            </div>
    );
}

export default ProjectDetail;