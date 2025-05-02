import React from 'react';
import Hero from '../common/Hero';
import Sidebar from '../common/Sidebar';
import JobCard from '../common/JobCard';
import { jobDetails } from '../data/Data';

export const Jobs = () => {
    return (
        <>
            <Hero title="Jobs" />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16'>
                {/* Main divs */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {/* Sidebar */}
                    <div className='lg:col-span-1'>
                        <Sidebar />
                    </div>
                    {/* Cards */}
                    <div className='lg:col-span-2'>
                        <JobCard jobs={jobDetails} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jobs;
