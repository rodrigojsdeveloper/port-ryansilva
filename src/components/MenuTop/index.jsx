import React from 'react';
import GithubIcon from '../Svgs/GithubIcon';
import LinkedinIcon from '../Svgs/LinkedinIcon';

const MenuTop = () => {

  return (
    <div className='w-full z-10 bg-background text-gray-primary fixed top-0 left-0 p-3 flex items-center justify-center gap-4'>
      <GithubIcon className="cursor-pointer" />
      <LinkedinIcon className="cursor-pointer" />
    </div>
  );
};

export default MenuTop;
