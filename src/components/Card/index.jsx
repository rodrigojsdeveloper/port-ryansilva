/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const InteractiveCard = ({
  children,
  className,
  title,
  subtitle,
  color,
  animationSpeed = false,
  animationInSide,
  animationOutSide,
}) => {
  const [style, setStyle] = useState({});
  const [blurStyle, setBlurStyle] = useState({ opacity: 0 });
  const [triggerOnce, setTriggerOnce] = useState(false);

  // const classAnimate = {
  //   left: {
  //     in: `animate-slideIn${animationSpeed ? 'Fast' : 'Slow'}Left`,
  //     out: `animate-slideOut${animationSpeed ? 'Fast' : 'Slow'}Left`,
  //   },
  //   right: {
  //     in: `animate-slideIn${animationSpeed ? 'Fast' : 'Slow'}Right`,
  //     out: `animate-slideOut${animationSpeed ? 'Fast' : 'Slow'}Right`,
  //   }
  // }

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const mouseX = (clientX - left);
    const mouseY = (clientY - top);

    const sensitivity = 50;
    // const rotateX = ((mouseY / height) * 100 - 50) / sensitivity;
    // const rotateY = -(((mouseX / width) * 100 - 50) / sensitivity);

    // setStyle({
    //   transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    // });

    setBlurStyle({
      top: `${mouseY}px`,
      left: `${mouseX}px`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    // setStyle({
    //   transform: 'perspective(700px) rotateX(0deg) rotateY(0deg)',
    //   transition: 'transform 0.5s ease-out',
    // });

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
    if (inView) return animationInSide; // Entrada
    else return animationOutSide; // Saída
  }, [inView]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`z-10 relative bottom-[7em] hidden-scroll overflow-hidden mx-4 max-lg:overflow-x-scroll p-10 max-sm:px-6 bg-gray-secondary/70 rounded-xl border border-gray-3 transition-transform ${animationClass}`}
    >
      <div
        style={blurStyle}
        className={`absolute w-52 h-52 rounded-full ${color} blur-[10em] transition-opacity duration-500 ease-out`}
      />
      <div className={`w-full relative p-10 max-sm:px-0 ${className}`}>
        <div className='top-1 absolute pointer-events-none'>
          <h1 className='font-semibold text-stone-400'>{title}</h1>
          <p className='text-xs text-stone-500'>{subtitle}</p>
        </div>
        <section className='py-3'>
          {children}
        </section>
      </div>
    </div>
  );
};

export default InteractiveCard;
