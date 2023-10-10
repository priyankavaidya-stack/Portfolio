import React from 'react';


const ProjectDetail = ({children}) => {
    return (
            <div className='overlay'>
                {children}
            </div>
    );
}

export default ProjectDetail;