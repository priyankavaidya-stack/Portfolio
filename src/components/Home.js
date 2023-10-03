import React from 'react';
import Hero from './Hero';

const Home = () => {
    return(
            <div className='min-[991px]:ml-60 h-screen bg-[rgb(36,36,36)] text-white z-0 bg-fixed' >
                <section id="home">
                    <Hero />
                </section>
            </div>
    );
    
}

export default Home;