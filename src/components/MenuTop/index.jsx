import React from 'react';
import GithubIcon from '../Svgs/GithubIcon';
import LinkedinIcon from '../Svgs/LinkedinIcon';

const MenuTop = () => {

  return (
    <div className='w-full z-20 bg-background text-gray-primary fixed top-0 left-0 p-3 flex items-center justify-center gap-4'>
      <a href='https://github.com/ryanbsdeveloper' target='_blank' className="cursor-pointer" >
        <GithubIcon />
      </a>
      <a href='https://www.linkedin.com/in/ryanbarbosasilva/' target='_blank' className="cursor-pointer" >
        <LinkedinIcon />
      </a>
    </div>
  );
};

export default MenuTop;
