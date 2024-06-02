import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const DescriptionContainerAnimationLeft = ({ children, scrollY, threshold }) => {
  const [triggerOnce, setTriggerOnce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollY) {
        setTriggerOnce(true);
      }
      else {
        setTriggerOnce(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { ref, inView } = useInView({
    threshold: threshold || 0.6,
    triggerOnce: triggerOnce,
  });
  
  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInFastLeft'; // Entrada
    else return 'animate-slideOutFastLeft'; // Saída
  }, [inView]);

  return (
    <div ref={ref} className={`opacity-0 ${animationClass} flex w-full flex-col transform`}>
      {children}
    </div>
  );
};

export default DescriptionContainerAnimationLeft;