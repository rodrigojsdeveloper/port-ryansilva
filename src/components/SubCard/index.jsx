import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SubCard = ({children, title, className}) => {
  const [triggerOnce, setTriggerOnce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTriggerOnce(false);
      }
      else {
        setTriggerOnce(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: triggerOnce,
  });

  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInRight'; // Entrada
    else return 'animate-slideOutRight'; // Saída
  }, [inView]);

  return (
    <div
      ref={ref} className={`opacity-0 ${animationClass} transform bg-gray-secondary rounded-xl overflow-hidden ${className} `}
    >
      <div className='bg-gray-3 py-3 px-6'>
        <h2 className='text-white-primary font-semibold'>{title}</h2>
      </div>
      <div className="px-4 bg-gray-4">
        {children}
      </div>
    </div>
  );
};

export default SubCard;
