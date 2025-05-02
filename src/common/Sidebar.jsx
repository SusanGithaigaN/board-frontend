import React from 'react'
import Location from './Location';
import Category from './Category';
import Button from './Button';
import { categories, jobType, expLevel, datePosted } from '../data/Data';
import SalarySlider from './SalarySlider';

export const Sidebar = () => {
    return (
        <div className='bg-[#309689]/10 p-4 rounded-md'>
            {/* Search by Job Title */}
            <p className='font-semibold text-base'>Search by Job Title</p>
            <form className="max-w-md mx-auto py-2">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border-none rounded-lg bg-white"
                        placeholder="Job title or company" required />
                </div>
            </form>
            {/* location */}
            <div className='py-2'>
                <p className='font-semibold text-base capitalize py-2'>location</p>
                <Location />
            </div>
            <div className='py-2'>
                <h3 className="text-base font-semibold mb-2">Category</h3>
                <Category categories={categories} />
                <Button
                    buttons={[{ href: "/", label: "show more", variant: "primary" }]}
                />
            </div>
            <div className='py-2'>
                <h3 className="text-base font-semibold mb-2">Job Type</h3>
                <Category categories={jobType} />
            </div>
            <div className='py-2'>
                <h3 className="text-base font-semibold mb-2">Experience Level</h3>
                <Category categories={expLevel} />
            </div>
            <div className='py-2'>
                <h3 className="text-base font-semibold mb-2">Date Posted</h3>
                <Category categories={datePosted} />
            </div>
            <div className='py-2'>
                <h3 className="text-base font-semibold mb-2">Salary</h3>
                <SalarySlider />
            </div>
        </div>
    )
}
export default Sidebar;