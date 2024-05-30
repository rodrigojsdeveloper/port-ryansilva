/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ItemTech from './ItemTech';
import SalesforceIcon from '../Svgs/SalesforceIcon';
import AzureIcon from '../Svgs/AzureIcon';
import DockerIcon from '../Svgs/DockerIcon';
import TypeScriptIcon from '../Svgs/TypeScriptIcon';
import PythonIcon from '../Svgs/PythonIcon';
import ReactIcon from '../Svgs/ReactIcon';
import PhpIcon from '../Svgs/PhpIcon';

const Technologies = ({ src }) => {
  return (
    <div className='flex items-center justify-center gap-10'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <ItemTech animationSide='left'>
          <SalesforceIcon/>
        </ItemTech>
        <ItemTech animationSide='left'>
          <AzureIcon/>
        </ItemTech>
      </div>
      <div className='flex flex-col justify-center'>
        <ItemTech animationSide='top'>
          <PhpIcon/>
        </ItemTech>
        <ItemTech animationSide='left'>
          <PythonIcon/>
        </ItemTech>
        <ItemTech animationSide='bottom'>
          <ReactIcon/>
        </ItemTech>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <ItemTech animationSide='right'>
          <DockerIcon/>
        </ItemTech>
        <ItemTech animationSide='right'>
          <TypeScriptIcon/>
        </ItemTech>
      </div>
    </div>
  );
};

export default Technologies;
