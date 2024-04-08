import React, { useState } from 'react';
import ArrowRight from '../Svgs/ArrowRight';

const Button = ({ label, onClick = () => { }, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-3 text-xl font-semibold text-white-primary"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='button'>{label}</span>
        <ArrowRight hover={isHovered} />
      </button >
    </>
  );
};

export default Button;
