import React from 'react';
import BusinessIcon from '../Svgs/BusinessIcon';
import VisieTextoIcon from '../Svgs/VisieTextoIcon';
import CalendarHeartIcon from '../Svgs/CalendarHeartIcon';
import CalendarIcon from '../Svgs/CalendarIcon';
import Image from 'next/image';
import HandShakeIcon from '../Svgs/HandShakeIcon';
import PersonaBusinessIcon from '../Svgs/PersonaBusinessIcon';
import SchoolIcon from '../Svgs/SchoolIcon';

const Fork = () => {
  return (
    <div className="flex justify-center gap-5 mt-20 w-full pointer-events-none">
      <div className="w-1/2 flex flex-col p-3 bg-gray-800 rounded-lg shadow-lg">
        <div className='absolute py-3 px-5 top-[6em] left-[2.85em] bg-gray-800 rounded-t-lg text-sm font-medium text-white-primary'>
          Profissionais
        </div>
        <div className="p-3 flex items-center text-green-primary gap-5">
          <div className='w-full'>
            <VisieTextoIcon width='80' />
            <div className='w-full flex justify-between items-center'>
              <p className="text-white-primary text-sm font-medium">Desenvolvedor fullstack</p>
              <p className="text-gray-400 flex text-sm gap-3 items-center">
                <CalendarHeartIcon width={'15'} />
                Março 2023 - Presente
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 flex items-center gap-5">
          <div className='w-full'>
            <Image width='65' height={'65'} alt='image-vero' src={'/img/vero.png'} />
            <div className='w-full flex justify-between items-center'>
              <p className="text-white-primary text-sm font-medium">Desenvolvedor fullstack</p>
              <p className="text-gray-400 flex text-sm gap-3 items-center">
                <CalendarIcon width={'15'} />
                Agosto 2022 - Março 2023
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 flex items-center gap-5">
          <div className='w-full'>
            <h1 className='text-white-primary text-lg'>Freelancer</h1>
            <div className='w-full flex justify-between items-center'>
              <p className="text-white-primary text-sm font-medium">Desenvolvedor fullstack</p>
              <p className="text-gray-400 flex text-sm gap-3 items-center">
                <CalendarIcon width={'15'} />
                Outubro 2021
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col p-3 bg-gray-800 rounded-lg shadow-lg">
        <div className='absolute py-3 px-5 top-[6em] right-[33.4em] bg-gray-800 rounded-t-lg text-sm font-medium text-white-primary'>
          Educacional
        </div>
        <div className="p-3 flex items-center text-green-primary gap-5">
          <div className='w-full'>
            <VisieTextoIcon width='80' />
            <div className='w-full flex justify-between items-center'>
              <p className="text-white-primary text-sm font-medium">Desenvolvedor fullstack</p>
              <p className="text-gray-400 flex text-sm gap-3 items-center">
                <CalendarHeartIcon width={'15'} />
                Março 2023 - Presente
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 flex items-center gap-5">
          {/* <span className='text-gray-800 w-8 h-7 rounded-full bg-green-primary flex items-center justify-center'>
            <HandShakeIcon width={'18'} height={'18'} />
          </span> */}
          <div className='w-full'>
            <Image width='65' height={'65'} alt='image-vero' src={'/img/vero.png'} />
            <div className='w-full flex justify-between items-center'>
              <p className="text-white-primary text-sm font-medium">Desenvolvedor fullstack</p>
              <p className="text-gray-400 flex text-sm gap-3 items-center">
                <CalendarIcon width={'15'} />
                Agosto 2022 - Março 2023
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 flex items-center gap-5">
          {/* <span className='text-gray-800 w-8 h-7 rounded-full bg-green-primary flex items-center justify-center'>
            <PersonaBusinessIcon width='23' height='23' />
          </span> */}
          <div className='w-full'>
            <h1 className='text-white-primary text-lg'>Freelancer</h1>
            <div className='w-full flex justify-between items-center'>
              <p className="text-white-primary text-sm font-medium">Desenvolvedor fullstack</p>
              <p className="text-gray-400 flex text-sm gap-3 items-center">
                <CalendarIcon width={'15'} />
                Outubro 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fork;
