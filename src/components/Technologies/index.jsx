/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ItemTech from './ItemTech';

const Technologies = ({ src }) => {
  return (
    <div className='flex items-center justify-center gap-10'>
      <div className='flex flex-col justify-center'>
        <ItemTech animationSide='left'>
          ITEM 1
        </ItemTech>
        <ItemTech animationSide='left'>
          ITEM 2
        </ItemTech>
        <ItemTech animationSide='left'>
          ITEM 3
        </ItemTech>
      </div>
      <div className='flex flex-col justify-center'>
        <ItemTech animationSide='top'>
          ITEM 1
        </ItemTech>
        <ItemTech animationSide='left'>
          ITEM 2
        </ItemTech>
        <ItemTech animationSide='bottom'>
          ITEM 3
        </ItemTech>
      </div>
      <div className='flex flex-col justify-center'>
        <ItemTech animationSide='right'>
          ITEM 1
        </ItemTech>
        <ItemTech animationSide='right'>
          ITEM 2
        </ItemTech>
        <ItemTech animationSide='right'>
          ITEM 3
        </ItemTech>
      </div>
    </div>
  );
};

export default Technologies;
