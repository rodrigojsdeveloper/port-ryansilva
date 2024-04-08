import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';


const DescriptionContainerAnimationLeft = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });
  
  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInLeft'; // Entrada
    else return 'animate-slideOutLeft'; // Saída
  }, [inView]);

  return (
    <div ref={ref} className={`opacity-0 ${animationClass} transform`}>
      {children}
    </div>
  );
};

export default DescriptionContainerAnimationLeft;