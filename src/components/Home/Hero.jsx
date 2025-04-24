import React from 'react'

export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center w-full gap-4 px-4">
                <p className='capitalize text-base md:text-3xl font-bold py-2 text-white'>find your dream job today!</p>
                <p className='font-semibold text-base py-2 text-white'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
            </div>
            <div className='flex flex-row gap-4 items-center rounded-md w-full bg-white px-4 py-6'>
                <p className='text-gray-600 capitalize'>Job title or company</p>
                <p className='text-gray-600 capitalize'>select location</p>
                <p className='text-gray-600 capitalize'>select category</p>
                <div className='flex flex-row bg-[#309689] px-4 py-2 rounded-md w-fit'>
                    <p className='text-white font-semibold'>Search Job</p>
                    <svg
                        className="text-white h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 56.966 56.966"
                        width="512px"
                        height="512px"
                    >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </div>
            </div>
        </>
    )
}
