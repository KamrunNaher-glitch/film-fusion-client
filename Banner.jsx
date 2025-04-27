import React from 'react';
import Family from './src/assets/Family.jpg';

const Banner = () => {
    return (
        <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] overflow-hidden flex items-center justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto">
                
                {/* Left side - Image */}
                <div className="w-full lg:w-1/2">
                    <img 
                        src={Family} 
                        alt="Family Banner" 
                        className="w-full h-full object-contain mx-auto" 
                    />
                </div>

                {/* Right side - Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left p-4">
                    <h1 className="mb-4 text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Welcome to Film Fusion
                    </h1>
                    <p className="mb-5 text-xs sm:text-sm md:text-base lg:text-lg text-black mt-3">
                        Where entertainment never stops! Discover the latest blockbusters, timeless classics, 
                        and binge-worthy TV shows,<br /> all in one place. Stay updated with reviews, ratings, 
                        and the hottest trends in cinema.
                    </p>
                    <button className="btn btn-primary px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base mt-3">
                        Explore More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Banner;
