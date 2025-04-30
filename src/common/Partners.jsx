import React from 'react';
import spotify from '../assets/spotify.svg';
import adobe from '../assets/adobe.svg';
import slack from '../assets/slack.svg';
import asana from '../assets/asana.svg';
import linear from '../assets/linear.svg';

export const Partners = () => {
  return (
    <>
    <div className='flex flex-row items-center justify-center gap-30 bg-black p-2'>
    <div className='partner'>
            <img className='img-fluid h-30 w-30' alt='partner' src={spotify} />
        </div>
        <div className='partner'>
            <img className='img-fluid h-30 w-30' alt='partner' src={slack} />
        </div>
        <div className='partner'>
            <img className='img-fluid h-30 w-30' alt='partner' src={adobe} />
        </div>
        <div className='partner'>
            <img className='img-fluid h-30 w-30' alt='partner' src={asana} />
        </div>
        <div className='partner'>
            <img className='img-fluid h-30 w-30' alt='partner' src={linear} />
        </div>
    </div>
    </>
  )
}
export default Partners;