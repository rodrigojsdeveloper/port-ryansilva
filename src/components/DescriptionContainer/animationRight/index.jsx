import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const DescriptionContainerAnimationRight = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });
  
  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInRight'; // Entrada
    else return 'animate-slideOutRight'; // Saída
  }, [inView]);

  return (
    <div ref={ref} className={`opacity-0 ${animationClass} transform`}>
      {children}
    </div>
  );
};

export default DescriptionContainerAnimationRight;