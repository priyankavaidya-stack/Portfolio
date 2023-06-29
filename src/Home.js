import React from 'react';
// import backgroundImage from './backgroundImage.jpg';
import Hero from './Hero';

const Home = () => {
    return(
            <div className='min-[991px]:ml-60 h-screen bg-[rgb(36,36,36)] text-white z-0 bg-fixed' >
                <section id="home">
                    {/* <div className="" style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition:"cover",
                        backgroundAttachment:"fixed",
                        backgroundRepeat:"no-repeat",
                        transition:"all ease-in 0.3s"

                        }}></div> */}
                    <Hero />
                </section>
            </div>
    );
    
}

export default Home;