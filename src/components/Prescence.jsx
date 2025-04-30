import React from 'react';
import placeholder from '../assets/placeholder.jpg'
import Button from '../common/Button';
export const Prescence = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='img'>
                    <img className='img-fluid h-full w-auto rounded-xl' alt='prescence' src={placeholder} />
                </div>
                <div className='text space-y-2 md:space-y-4'>
                    <p className='capitalize text-xl md:text-3xl font-bold py-2'>Good Life Begins With A Good Company</p>
                    <p className='text-sm md:text-base font-thin text-gray-500'>
                        Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat
                        . Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.
                    </p>
                    {/* Buttons section */}
                    <div className='flex flex-row items-center gap-4'>
                        <Button buttons={[{ href: "/", label: "search job", variant: "primary" }]} />
                        <p className='text-[#309689] font-semibold underline'>Learn more</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
