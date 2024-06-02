import React from 'react';

const Footer = () => {

  return (
    <div className='w-full z-10 bg-background text-stone-400 p-3 flex flex-col items-center justify-center gap-4'>
      <div>
        <h2 className='text-center text-xs font-medium'>{'"The only way to do something great is to love what you do."'}</h2>
      </div>
      <h4 className='text-sm text-stone-500'>
        © ryanbsdeveloper. Todos direitos reservados.
      </h4>
    </div>
  );
};

export default Footer;
