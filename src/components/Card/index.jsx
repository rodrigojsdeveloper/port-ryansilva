import React, { useState } from 'react';

const Card = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100 - 50;
    const y = ((clientY - top) / height) * 100 - 50;

    // Inclinação leve com base na posição do mouse
    const rotateX = y / 10;
    const rotateY = -(x / 10);

    // Cor de sombra que muda com base na posição do mouse
    const shadowColor = `rgba(${(x + 50) * 2.55}, ${(y + 50) * 2.55}, 150, 0.7)`;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `${rotateY}px ${rotateX}px 15px ${shadowColor}`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({});
  };

  return (
    <div
      className="bg-white p-4 rounded-xl transition-transform duration-200 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {/* Conteúdo do card */}
    </div>
  );
};

export default Card;
