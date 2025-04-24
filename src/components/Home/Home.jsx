import React from 'react'
import Hero from './Hero'
import heroImage from '../../assets/hero.jpg';

export default function Home() {
    return (
        <div className="">
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-5"></div>
                {/* Content */}
                <div className="relative z-10">
                    <Hero />
                </div>
            </div>
        </div>

    )
}
