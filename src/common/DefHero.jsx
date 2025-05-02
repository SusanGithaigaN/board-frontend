import React from "react";
import DisplayCards from "./DisplayCards";
import { displayData } from '../data/Data';

export default function DefHero() {

    return (
        < div className="px-4 md:px-0" >
            <div className="flex flex-col items-center max-w-4xl mx-auto py-16 gap-4">
                <p className="capitalize text-xl md:text-3xl font-bold py-2 text-white">
                    Find your dream job today!
                </p>
                <p className="font-semibold text-base py-2 text-white text-center">
                    Connecting Talent with Opportunity: Your Gateway to Career Success
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center rounded-2xl max-w-3xl mx-auto bg-white p-4 md:p-0 md:h-16 gap-4">
                <div className="text-gray-600 capitalize pb-2 md:pb-0 border-b-2 border-gray-200 md:border-b-0 md:border-r-2 pr-2 px-4">
                    <p>Job title or company</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 capitalize pb-2 md:pb-0 border-b-2 border-gray-200 md:border-b-0 md:border-r-2 pr-2 px-4">
                    <p>Select location</p>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                    >
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#4B5563"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="flex items-center gap-2 text-gray-600 capitalize pb-2 md:pb-0 border-b-2 border-gray-200 md:border-none pr-2 px-4">
                    <p>Select category</p>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                    >
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#4B5563"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </div>
                <div className="flex flex-row items-center justify-center gap-2 bg-[#309689] px-2 h-full py-2 rounded-xl md:rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none md:rounded-bl-none">
                    <svg
                        className="text-white h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 56.966 56.966"
                        width="512px"
                        height="512px"
                    >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                    <p className="text-white font-semibold">Search Job</p>
                </div>
            </div>
            <div className="imgs">
                <DisplayCards displayCards={displayData} />
            </div>
        </div>
    );
}
