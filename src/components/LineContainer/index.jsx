import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const LineContainer = ({
  children,
  LineInitial = false,
  animationLine,
  // animationBottomLine,
  className,
  color,
  icon: Icon,
  fromTopLine = "from-60%",
  fromBottomLine = "from-60%",
  heightTopLine = "h-full",
  heightBottomLine = "h-full"
}) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });
  
  const lineAnimationClass = useMemo(() => {
    if (inView) return 'animate-grow'; // Animação de crescimento
    else return 'animate-shrink'; // Animação de encolhimento
  }, [inView]);

  return (
    <div ref={ref}>
      <div className={`flex m-5 ${className}`}>
        <div className={`flex flex-col items-center max-w-[5em] pr-4 ${animationLine ? lineAnimationClass : ''}`}>
          {LineInitial && <span className='h-[32px] w-[12px] border-2 border-gray-700 rounded-full mb-2'></span>}
          <div className={`w-[3px] ${heightTopLine} bg-gradient-to-t from-${color} ${fromTopLine} to-transparent rounded-md `}/>
          {Icon && 
            <div className='my-5'>
              <div className={`p-4 blur-xl bg-${color}`}></div>
              <span className='text-white relative top-[-25px] left-[5px]'>
                <Icon/>
              </span>
            </div>
          }
          <div className={`w-[3px] ${heightBottomLine} bg-gradient-to-b from-${color} ${fromBottomLine} to-transparent rounded-md`}/> 
        </div>
        {children}
      </div>
    </div>
  );
};

export default LineContainer;
