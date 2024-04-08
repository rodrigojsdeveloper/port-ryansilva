import React, { useState, useEffect } from 'react';

const ArrowRight = ({hover}) => {
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    setPathLength(hover ? 17 : 0);
  }, [hover]);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1.3em" 
      height="1em" 
      viewBox="0 0 24 24"
    >
      <path 
        fill="none" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d={`M5 12h${pathLength}m-7-7l7 7-7 7`} 
        style={{ transition: 'all 0.3s ease' }}
      />
    </svg>
  );
};

export default ArrowRight;
