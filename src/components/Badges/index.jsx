import React from 'react';
import StarIcon from '../Svgs/StarIcon';
import Image from 'next/image';
import ClockIcon from '../Svgs/ClockIcon';

const Badges = () => {

  return (
    <div className='grid grid-cols-6 gap-4 max-md:grid-cols-3 pointer-events-none'>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={'/img/pcep.png'} alt='PCEP' className="grayscale" width={50} height={50} />
          <span className='flex items-center justify-center gap-1 text-stone-600'>
            <p className='font-semibold text-xs'>PCEP</p>
            <ClockIcon/>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={'/img/pcap.png'} alt='PCAP' className="grayscale" width={50} height={50} />
          <span className='flex items-center justify-center gap-1 text-stone-600'>
            <p className='font-semibold text-xs'>PCAP</p>
            <ClockIcon/>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={'/img/jse.png'} className="grayscale" alt='JSE' width={50} height={50} />
          <span className='flex items-center justify-center gap-1 text-stone-600'>
            <p className='font-semibold text-xs'>JSE</p>
            <ClockIcon/>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={'/img/salesforce.png'} className="grayscale" alt='SALESFORCE' width={50} height={50} />
          <span className='flex items-center justify-center gap-1 text-stone-600'>
            <p className='font-semibold text-xs'>PD I</p>
            <ClockIcon/>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        {/* <StarIcon /> */}
      </div>
      <div className='flex items-center justify-center'>
        {/* <StarIcon /> */}
      </div>
    </div>
  );
};

export default Badges;
