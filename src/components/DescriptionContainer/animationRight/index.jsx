import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const DescriptionContainerAnimationRight = ({ children, scrollY, threshold}) => {
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
    threshold: threshold || 0.4,
    triggerOnce: triggerOnce,
  });
  
  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInFastRight'; // Entrada
    else return 'animate-slideOutFastRight'; // Saída
  }, [inView]);

  return (
    <div ref={ref} className={`opacity-0 ${animationClass} transform`}>
      {children}
    </div>
  );
};

export default DescriptionContainerAnimationRight;