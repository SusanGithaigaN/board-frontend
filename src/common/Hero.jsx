import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title }) => {
    return (
        <div
            className='w-full bg-black py-24 md:py-32 relative text-white flex items-center justify-center'
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    {title}
                </h1>
            </div>
        </div>
    );
};

Hero.propTypes = {
    title: PropTypes.string,
};

export default Hero;
