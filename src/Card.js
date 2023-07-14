import React, { useState } from 'react';
import Listing from './Listing';
import ProjectDetail from "./ProjectDetail";
import Modal from "./Modal";

const Card = ({data}) => {
    // const {imageUrl, title, description, icon1, icon2, icon3, icon4  } = data;

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <div>
            <Listing data={data} open={openModal} close={closeModal} />
            {open && (
                <ProjectDetail close={closeModal}>{<Modal data={data}/>}</ProjectDetail>
            )}
        </div>
    )
   
    // logic for rendering the expanded view
}

export default Card;