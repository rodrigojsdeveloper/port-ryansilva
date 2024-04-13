import React from 'react';
import BusinessIcon from '../Svgs/BusinessIcon';
import VisieTextoIcon from '../Svgs/VisieTextoIcon';
import CalendarHeartIcon from '../Svgs/CalendarHeartIcon';
import CalendarIcon from '../Svgs/CalendarIcon';
import Image from 'next/image';
import HandShakeIcon from '../Svgs/HandShakeIcon';
import PersonaBusinessIcon from '../Svgs/PersonaBusinessIcon';

const Fork = () => {
  return (
    <div className="flex w-full pointer-events-none">
      {/* Componente esquerdo com ícone e texto */}
      <div className="flex h-min items-center gap-4 p-6 text-green-500 bg-gray-800 rounded-lg shadow-lg">
        <BusinessIcon />
        <div className='flex w-[20em] justify-between items-center'>
          <p className="text-white-primary font-medium">Trabalhos</p>
          <p className="text-gray-400 text-sm">Profissionais</p>
        </div>
      </div>

      {/* Conector horizontal com bolinhas */}
      <div className="relative flex-auto flex items-center top-[-5.30rem]">
        {/* Bolinha no início da linha */}
        <div className="w-3 h-3 bg-gray-500 rounded-full" />
        {/* Linha */}
        <div className="flex-auto bg-gray-500 h-1" />
        {/* Bolinha no final da linha */}
        <div className="w-3 h-3 bg-gray-500 rounded-full" />
      </div>

      {/* Componente direito */}
      <div className="w-1/2 flex flex-col p-3 bg-gray-800 rounded-lg shadow-lg">
        <div className='absolute py-3 px-5 top-1 right-[33.4em] bg-gray-800 rounded-t-lg text-sm font-medium text-white-primary'>
          Qualificações
        </div>
        <div className="p-3 flex items-center text-green-primary gap-5">
          <span className='text-gray-800 w-8 h-7 rounded-full bg-green-primary flex items-center justify-center'>
            <HandShakeIcon width={'18'} height={'18'} />
          </span>
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
          <span className='text-gray-800 w-8 h-7 rounded-full bg-green-primary flex items-center justify-center'>
            <HandShakeIcon width={'18'} height={'18'} />
          </span>
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
          <span className='text-gray-800 w-8 h-7 rounded-full bg-green-primary flex items-center justify-center'>
            <PersonaBusinessIcon width='23' height='23' />
          </span>
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
