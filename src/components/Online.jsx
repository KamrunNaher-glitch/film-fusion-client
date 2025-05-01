import React from 'react';
import online from '../assets/online.jpg'

const Online = () => {
    return (
        <div
            className="relative flex items-center justify-start px-6 md:px-12 lg:px-20 py-20 mt-10"
            style={{
                backgroundImage: `url(${online})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content Section */}
            <div className="relative z-10 max-w-lg text-left text-white">
                <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    The best movie and video on your home.
                </h1>
                <p className="mb-5 text-sm sm:text-base md:text-lg opacity-90">
                your one-stop destination for streaming the latest movies and TV shows from the comfort of your home! Enjoy blockbuster hits, classic favorites, and trending series—all at your fingertips. Watch, explore, and stay updated with reviews, ratings, and exclusive trailers.
                </p>
                <button className="px-6 py-3 text-sm sm:text-base md:text-lg font-medium text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg hover:scale-105 transition">
                   Watch Online
                </button>
            </div>
        </div>
    );
};

export default Online;