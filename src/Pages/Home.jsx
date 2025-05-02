import React from 'react'
import DefHero from '../common/DefHero'
import heroImage from '../assets/hero.jpg';
import Partners from '../common/Partners';
import JobCard from '../common/JobCard';
import { jobDetails } from '../data/Data'
import { Category } from '../components/Category';
import { Prescence } from '../components/Prescence';
import { More } from '../components/More';

export default function Home() {
    return (
        <div className="home">
            <div
                className="bg-cover bg-center h-[520px] flex items-center justify-center pb-10 pt-8 md:pt-0"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    backgroundBlendMode: "overlay",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0"></div>
                {/* Content */}
                <div className="relative z-10">
                    <DefHero />
                </div>
            </div>
            <Partners />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='items-start space-y-2 px-4 py-4 md:py-8'>
                    <p className='capitalize font-bold text-xl md:text-3xl'>recent jobs available</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <JobCard jobs={jobDetails} />
            </div>
            <Category />
            <Prescence />
            <More />
        </div>
    )
}
