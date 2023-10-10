import React, { useState } from 'react';
import Listing from './Listing';
import ProjectDetail from "./ProjectDetail";
import Modal from "./Modal";

const Card = ({data}) => {

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <div className="max-[768px]:col-span-12 min-[768px]:col-span-4 mx-3">
            <Listing data={data} open={openModal} />
            {open && (
                <ProjectDetail close={closeModal}>{<Modal data={data} close={closeModal}/>}</ProjectDetail>
            )}
        </div>
    )
   
    // logic for rendering the expanded view
}

export default Card;