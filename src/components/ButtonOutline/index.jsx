import React, { useState } from 'react';
import ArrowRightIcon from '../Svgs/ArrowRightIcon';

const ButtonOutline = ({ label, link = '', onClick = () => { } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {link && (
        <a
          className="flex items-center gap-3 text-xl font-semibold text-white-primary"
          href={link}
          target='_blank'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className='button'>{label}</span>
          <ArrowRightIcon hover={isHovered} />
        </a >
      )}
      {!link && (
        <button
          className="flex items-center gap-3 text-xl font-semibold text-white-primary"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className='button'>{label}</span>
          <ArrowRightIcon hover={isHovered} />
        </button>
      )}
    </>
  );
};

export default ButtonOutline;
