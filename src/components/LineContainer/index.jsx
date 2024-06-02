import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const LineContainer = ({
  children,
  LineInitial = false,
  animationLine,
  // animationBottomLine,
  className,
  color,
  title,
  icon: Icon,
  fromTopLine = "from-60%",
  fromBottomLine = "from-60%",
  heightTopLine = "h-full",
  heightBottomLine = "h-full"
}) => {
  const classeColor = {
    white: {
      from: 'from-white-primary',
      bg: 'bg-white-primary',
      text: 'text-white-primary',
    },
    puple: {
      from: 'from-puple-primary',
      bg: 'bg-puple-primary',
      text: 'text-puple-primary',
    },
    green: {
      from: 'from-green-primary',
      bg: 'bg-green-primary',
      text: 'text-green-primary',
    },
    blue: {
      from: 'from-blue-primary',
      bg: 'bg-blue-primary',
      text: 'text-blue-primary',
    },
    red: {
      from: 'from-green-primary',
      bg: 'bg-green-primary',
      text: 'text-green-primary',
    },
    pink: {
      from: 'from-pink-primary',
      bg: 'bg-pink-primary',
      text: 'text-pink-primary',
    }
  }

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
        <div className={`flex flex-col items-center max-w-[5em] pr-4 ${!Icon && 'pl-4'}  ${animationLine ? lineAnimationClass : ''}`}>
          {LineInitial && <span className='h-[32px] w-[12px] border-2 border-gray-700 rounded-full mb-2'></span>}
          <div className={`w-[3px] ${heightTopLine} bg-gradient-to-t ${classeColor?.[color]?.from} ${fromTopLine} to-transparent rounded-md `}/>
          {Icon && 
            <div className='flex items-center my-5'>
              <div className='h-[38px]'>
                <div className={`p-4 blur-xl ${classeColor?.[color]?.bg}`}></div>
                <span className={`${classeColor?.[color]?.text} relative top-[-25px] left-[5px]`}>
                  <Icon/>
                </span>
                
              </div>
              <h1 className="mb-1 ml-12 absolute text-2xl font-medium text-white-primary">{title}</h1>
            </div>
          }
          <div className={`w-[3px] ${heightBottomLine} bg-gradient-to-b ${classeColor?.[color]?.from} ${fromBottomLine} to-transparent rounded-md`}/> 
        </div>
        {children}
      </div>
    </div>
  );
};

export default LineContainer;
