import React from 'react';
import about from '../assets/about.png'

const AboutUs = () => {
    return (
        <div className="hero bg-base-200 px-4 py-10 md:px-10 lg:p-20">
            <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
                {/* Image Section */}
                <img 
                    src={about}
                    className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl"
                    alt="About Movie Portal"
                />

                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        About Film Fusion!
                    </h1>
                    <p className="py-6 text-gray-600 text-lg">
                        We believe entertainment should be convenient, enjoyable, and accessible. Our platform lets you watch movies online without hassle. Whether you're in the mood for a thrilling action film, a heartwarming drama, or the latest binge-worthy TV series, we've got you covered!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;