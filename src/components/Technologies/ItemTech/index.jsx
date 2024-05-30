import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const ItemTech = ({ children, className, animationSide }) => {

  const classAnimate = {
    left: {
      in: `animate-slideFarInLeft`,
      out: `animate-slideFarOutLeft`,
    },
    right: {
      in: `animate-slideFarInRight`,
      out: `animate-slideFarOutRight`,
    },
    top: {
      in: `animate-slideFarInTop`,
      out: `animate-slideFarOutTop`,
    },
    bottom: {
      in: `animate-slideFarInBottom`,
      out: `animate-slideFarOutBottom`,
    }
  }
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const animationClass = useMemo(() => {
    if (inView) return classAnimate?.[animationSide]?.in
    else return classAnimate?.[animationSide]?.out
  }, [animationSide, inView]);

  return (
    <div ref={ref} className={`flex justify-center items-center h-20 opacity-0 ${animationClass} transform`}>
      {children}
    </div>
  );
};

export default ItemTech;
