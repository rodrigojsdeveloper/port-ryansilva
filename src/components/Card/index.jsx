import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const InteractiveCard = ({children, title, subtitle, animationSide='Left'}) => {
  const [style, setStyle] = useState({});
  const [blurStyle, setBlurStyle] = useState({opacity: 0});
  const [triggerOnce, setTriggerOnce] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const mouseX = (clientX - left);
    const mouseY = (clientY - top);

    const sensitivity = 50;
    const rotateX = ((mouseY / height) * 100 - 50) / sensitivity;
    const rotateY = -(((mouseX / width) * 100 - 50) / sensitivity);

    setStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });

    setBlurStyle({
      top: `${mouseY}px`,
      left: `${mouseX}px`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(700px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
    });

    setBlurStyle(prev => ({
      ...prev,
      opacity: 0,
      transition: 'opacity 0.5s ease-out',
    }));
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationClass = useMemo(() => {
    if (inView) return `animate-slideInSlow${animationSide}`; // Entrada
    else return `animate-slideOutSlow${animationSide}`; // Saída
  }, [animationSide, inView]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`${animationClass} w-full relative bottom-[7em] hidden-scroll overflow-hidden mx-4 max-lg:overflow-x-scroll p-10 bg-gray-secondary rounded-xl border border-gray-700 transition-transform`}
    >
      <div
        style={blurStyle}
        className="absolute w-52 h-52 rounded-full bg-blue-primary blur-[10em] transition-opacity duration-500 ease-out"
      />
      <div className="relative p-10 h-[25em] max-lg:min-w-[1024px]">
        <div className='top-1 absolute pointer-events-none'>
          <h1 className='font-semibold text-gray-primary'>{title}</h1>
          <p className='text-xs text-gray-primary'>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;
