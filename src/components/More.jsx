import React from 'react';
import Button from '../common/Button';
import placeholder from '../assets/placeholder.jpg'

export const More = () => {
    const more = [
        {
            amount: '12k+',
            title: 'Clients worldwide',
            desc: 'At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum',
        },
        {
            amount: '20k+',
            title: 'Active resume',
            desc: 'At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum',
        },
        {
            amount: '18k+',
            title: 'Companies',
            desc: 'At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum',
        }
    ]
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
            <div className="bg-black text-white p-5 rounded-2xl flex items-center justify-between">
                <div className="text-left w-48">
                    <h1 className="sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2">Create A Better Future For Yourself</h1>
                    <p className="text-sm leading-relaxed mb-10">
                        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                        Blandit a massa elementum id scelerisque rhoncus.
                    </p>
                    <Button buttons={[{ href: "/", label: "search job", variant: "primary" }]} />
                </div>
                <div className="flex-shrink-0">
                    <img
                        src={placeholder} 
                        alt="Future Vision"
                        className=" h-48 img-fluid " 
                    />
                </div>
            </div>
        </div>
    )
}
