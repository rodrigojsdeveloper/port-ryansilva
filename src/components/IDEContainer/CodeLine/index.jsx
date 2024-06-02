import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const CodeLine = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInFastRight';
    else return 'animate-slideOutFastRight';
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`max-sm:w-[150vw] opacity-0 ${animationClass}`}
    >
      {children}
    </div>
  );
};

export default CodeLine;
