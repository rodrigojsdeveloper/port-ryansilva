import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const Projects = () => {

  return (
    <div className='grid justify-center-center grid-cols-4 max-md:grid-cols-2 gap-4'>
      <div className='shadow-lg bg-gray-secondary/70 rounded-lg border border-gray-3 p-4'>
        <div className='drop-shadow-none flex flex-col justify-center items-center '>
          <Image src={''} alt='' width={80} height={80} />
          <h1 className='text-base font-semibold text-stone-500'>Nome projeto</h1>
          <Button label={'Conferir '} />
        </div>
      </div>
      <div className='shadow-lg bg-gray-secondary/70 rounded-lg border border-gray-3 p-4'>
        <div className='drop-shadow-none flex flex-col justify-center items-center '>
          <Image src={''} alt='' width={80} height={80} />
          <h1 className='text-base font-semibold text-stone-500'>Nome projeto</h1>
          <Button label={'Conferir '} />
        </div>
      </div>
      <div className='shadow-lg bg-gray-secondary/70 rounded-lg border border-gray-3 p-4'>
        <div className='filter-none flex flex-col justify-center items-center '>
          <Image src={''} alt='' width={80} height={80} />
          <h1 className='text-base font-semibold text-stone-500'>Nome projeto</h1>
          <Button label={'Conferir '} />
        </div>
      </div>
      <div className='shadow-lg bg-gray-secondary/70 rounded-lg border border-gray-3 p-4'>
        <div className='filter-none flex flex-col justify-center items-center '>
          <Image src={''} alt='' width={80} height={80} />
          <h1 className='text-base font-semibold text-stone-500'>Nome projeto</h1>
          <Button label={'Conferir '} />
        </div>
      </div>
      <div className='shadow-lg bg-gray-secondary/70 rounded-lg border border-gray-3 p-4'>
        <div className='filter-none flex flex-col justify-center items-center '>
          <Image src={''} alt='' width={80} height={80} />
          <h1 className='text-base font-semibold text-stone-500'>Nome projeto</h1>
          <Button label={'Conferir '} />
        </div>
      </div>
      <div className='shadow-lg bg-gray-secondary/70 rounded-lg border border-gray-3 p-4'>
        <div className='filter-none flex flex-col justify-center items-center '>
          <Image src={''} alt='' width={80} height={80} />
          <h1 className='text-base font-semibold text-stone-500'>Nome projeto</h1>
          <Button label={'Conferir '} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
