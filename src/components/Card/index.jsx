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
  const [mouseOverCard, setMouseOverCard] = useState(false);

  const handleMouseMove = (e) => {
    if (!mouseOverCard) {
      setBlurStyle(prev => ({
        ...prev,
        opacity: 0,
        transition: 'opacity 0.5s ease-out',
      }));
      return
    };

    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const mouseX = (clientX - left);
    const mouseY = (clientY - top);

    setBlurStyle(prev => ({
      ...prev,
      top: `${mouseY}px`,
      left: `${mouseX}px`,
      opacity: 1,
    }));
  };

  const handleMouseEnter = () => {
    setMouseOverCard(true);
  };

  const handleMouseLeave = () => {
    setMouseOverCard(false);
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
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`z-10 relative bottom-[7em] hidden-scroll overflow-hidden mx-4 max-lg:overflow-x-scroll p-10 max-sm:px-6 bg-gray-secondary/70 rounded-xl border border-gray-3 transition-transform ${animationClass}`}
    >
      <div
        style={blurStyle}
        className={`absolute w-32 h-32 rounded-full ${color} blur-[10em] transition-opacity duration-500 ease-out`}
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
