import React from 'react';
import { partners } from '../data/Data';

export const Partners = () => {
  return (
    <>
    <div className='flex flex-row items-center justify-center gap-30 bg-black p-2'>
        {partners.map((partner, index) => (
            <div className='partner' key={index}>
                <img className='img-fluid h-30 w-30' alt={partner.alt} src={partner.img} />
            </div>
        ))}
    </div>
    </>
  )
}
export default Partners;