import React from 'react';
import logo from '../assets/logo.svg';

export const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-white bg-black py-8 px-6'>
            <div className='flex flex-col items-start'>
                <div className='flex flex-row items-center mb-2'>
                    <img
                        alt="Your Company"
                        src={logo}
                        className="h-6 w-auto"
                    />
                    <p className='text-white font-bold pl-2 text-base'>Job</p>
                </div>
                <p className='text-sm text-gray-400'>Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam et.</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-white font-bold text-base mb-2'>Company</p>
                <ul className='list-none space-y-2 capitalize text-gray-400'>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>About Us</a>
                    </li>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>Our Team</a>
                    </li>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>Partners</a>
                    </li>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>For Candidates</a>
                    </li>
                    <li>
                        <a href='/' className='text-[#309689]'>For Employers</a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-white font-bold text-base mb-2'>Job Categories</p>
                <ul className='list-none space-y-2 capitalize text-gray-400'>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>Telecommunications</a>
                    </li>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>Hotels & Tourism</a>
                    </li>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>Construction</a>
                    </li>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>Education</a>
                    </li>
                    <li>
                        <a href='/' className='hover:text-[#309689]'>Financial Services</a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-white font-bold text-base mb-2'>Newsletter</p>
                <p className='text-sm text-gray-400 mb-2'>Eu nunc pretium vitae platea. Non netus elementum vulputate.</p>
                <div className='flex flex-col md:flex-row gap-2'>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-gray-800 text-white rounded-md py-2 px-3 w-full md:w-auto"
                    />
                    <button className="bg-[#309689] hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md">
                        Subscribe now
                    </button>
                </div>
            </div>
            <div className='col-span-full md:col-span-2 flex items-center justify-start text-gray-400 text-xs'>
                © Copyright Susan Githaiga {new Date().getFullYear()}
            </div>
            <div className='col-span-full md:col-span-2 flex items-center justify-end space-x-4 text-gray-400 text-xs'>
                <a href='/privacy-policy' className='hover:text-[#309689]'>Privacy Policy</a>
                <a href='/terms-conditions' className='hover:text-[#309689]'>Terms & Conditions</a>
            </div>
        </div>
    );
};

export default Footer;