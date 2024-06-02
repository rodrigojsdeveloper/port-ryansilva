import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import SearchIcon from '../Svgs/SearchIcon';
import ImageOffIcon from '../Svgs/ImageOffIcon';

const Projects = () => {

  const projects = [
    {
      name: 'Este portfólio aqui',
      imgSrc: "",
      imgAlt: "",
      width: 0,
      height: 0,
      className: 'grayscale rounded-full',
      link: 'https://github.com/ryanbsdeveloper/port-ryansilva',
    },
    {
      name: 'Treinamento digital',
      imgSrc: '',
      imgAlt: " digital",
      width: 0,
      height: 0,
      className: '',
      link: 'https://treinamentodigital.vercel.app/'
    },
    {
      name: 'Chat developers',
      imgSrc: '',
      imgAlt: "",
      width: 0,
      height: 0,
      className: '',
      link: 'https://github.com/ryanbsdeveloper/app-chat'
    },
    {
      name: 'DevFinder',
      imgSrc: '',
      imgAlt: "",
      width: 0,
      height: 0,
      className: 'rounded-full',
      link: 'https://devfinder-plus.vercel.app/'
    },
    {
      name: 'Catholic Community',
      imgSrc: '/img/catholic.png',
      imgAlt: "Catholic Community",
      width: 40,
      height: 40,
      className: '',
      link: 'https://catholiccommunity.social/'
    },
  ]

  return (
    <div className='grid justify-center grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
      {projects.map((project, index) => (
        <div key={index} className='shadow-lg bg-gray-secondary/70 rounded-lg border border-gray-3 p-4'>
          <div className='flex h-full flex-col justify-end items-center gap-1'>
            {
              project?.imgSrc ? (
                <Image
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  className={project.className}
                  width={project.width}
                  height={project.height}
                />
              ) : (
                <span className='text-stone-500'>
                  <ImageOffIcon/>
                </span>
              )
            }
            <h1 className='text-base font-semibold text-stone-500'>{project.name}</h1>
            <Button icon={<SearchIcon />} link={project.link} label={'Eai, vai conferir?'} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
