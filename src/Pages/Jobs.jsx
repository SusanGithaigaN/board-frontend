import React from 'react';
import Hero from '../common/Hero';
import Sidebar from '../common/Sidebar';
import JobCard from '../common/JobCard';
import { jobDetails, topCategory } from '../data/Data';
import CategoryCards from '../common/CategoryCards';

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
            {/* add pagination & func */}
            {/* slice first 5 elements, map on each page/section */}
            {/* <Category /> */}
            <div className='py-4 bg-[#309689]/10'>
                <p className='font-bold text-xl md:text-3xl capitalize p-4 text-center'>Top Company</p>
                <p className='text-sm text-center'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum</p>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                    {/* Render the cards here */}
                    <CategoryCards cards={topCategory} />
                </div>
            </div>
        </>
    );
};

export default Jobs;
