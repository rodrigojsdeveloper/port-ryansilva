import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ImageContainer = ({ src }) => {
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
    threshold: 0.2,
    triggerOnce: triggerOnce,
  });

  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInRight'; // Entrada
    else return 'animate-slideOutRight'; // Saída
  }, [inView]);

  return (
    <div ref={ref} className={`opacity-0 ${animationClass} transform`}>
      <img className='relative bottom-[70px] rounded-xl border border-gray-700' src={src} alt='image' />
    </div>
  );
};

export default ImageContainer;
