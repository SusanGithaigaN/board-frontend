import React from 'react';
import Button from '../common/Button';
import placeholder from '../assets/placeholder.jpg'
import { more } from '../data/Data';

export const More = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {more.map((more, index) => (
                    <div
                        className="flex flex-col rounded-2xl bg-white items-start space-y-2 p-4"
                        key={index}
                    >
                        <p className='font-bold text-2xl md:text-4xl text-[#309689]'>{more.amount}</p>
                        <p className="font-semibold text-xl sm:text-xl lg:text-2xl">
                            {more.title}
                        </p>
                        <p className="text-base rounded-md w-fit">
                            {more.desc}
                        </p>
                    </div>
                ))}
            </div>
            {/* Better future */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl overflow-hidden shadow-md bg-black text-white">
                <div className="relative px-6 py-10 sm:py-16 lg:py-24 md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold">
                        Create A Better <br className="sm:hidden" /> Future For Yourself
                    </h2>
                    <p className="mt-3 text-sm sm:text-base">
                        Au eu docendi pertinax iudicabit, amet lucilius ei senserit oblique,
                        delectus maiestatis intellegam persequeris eu pri.
                    </p>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#309689] hover:bg-[#309689]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#309689]"
                        >
                            Search Job
                        </a>
                    </div>
                </div>
                <div className="relative md:w-1/2">
                    <img
                        className="w-full h-auto object-cover blur-sm"
                        src={placeholder}
                        alt="Diverse Professionals"
                    />
                </div>
            </div>
        </div>
    )
}
