import React from 'react'
import Hero from '../common/Hero';
import GoodLife from '../common/GoodLife';
import Faq from '../common/Faq'
import place from '../assets/placeholder.jpg'
import create from '../assets/create.svg';
import cv from '../assets/resume.svg';
import job from '../assets/job-col.svg';
import apply from '../assets/apply.svg';

export const About = () => {

    const works = [
        {
            icon: create,
            cta: 'Create Account',
            details: 'Nunc sed a nisl purus. Nibh dis faucibus',
        },
        {
            icon: cv,
            cta: 'Upload Resume',
            details: 'Felis eu ultrices a sed massa. Commodo',
        },
        {
            icon: job,
            cta: 'Find Jobs',
            details: 'Felis eu ultrices a sed massa. Commodo',
        },
        {
            icon: apply,
            cta: 'Apply Job',
            details: 'Felis eu ultrices a sed massa. Commodo',
        },
    ]

    return (
        <>
            <Hero title="About Us" />
            {/* page content */}
            <div className='about-content md:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                {/* CTA */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='font-bold text-2xl md:text-3xl'>
                        Et nunc ut tempus duis nisl sed massa
                    </div>
                    <div className='text-gray-80 font-thin text-base'>
                        Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.

                    </div>
                </div>
                {/* img */}
                <div className="py-6">
                    <img className='rounded-2xl img-fluid bg-[#000000]/10' alt='Hello' src={place} />
                </div>
                {/* works */}
                <div className='text-center space-y-2'>
                    <p className='font-bold text-2xl md:text-3xl'>How it works</p>
                    <p className='font-thin text-base'>
                        At eu lobortis pretium tincidunt amet
                    </p>
                </div>
                {/* options */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2 py-4 md:py-6 justify-items-center items-center py-10 md:py-20'>
                    {works.map((item, index) => (
                        <div className='flex flex-col items-center text-center space-y-4 mb-2' key={index}>
                            {/* img */}
                            <img className="img-fluid h-10 w-10" alt='icon' src={item.icon} />
                            {/* header */}
                            <p className='font-bold text-base capitalize'>{item.cta}</p>
                            {/* details */}
                            <p className='text-sm text-gray-800'>{item.details}</p>
                        </div>
                    ))}
                </div>

                {/* Good life */}
                <GoodLife />

                {/* FAQs */}
                <Faq />

            </div>
        </>
    )
}
export default About;