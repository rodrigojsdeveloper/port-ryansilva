import React, { useState, useRef } from 'react';

const InteractiveCard = ({children}) => {
  const [style, setStyle] = useState({});
  const [blurStyle, setBlurStyle] = useState({opacity: 0});

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    // Calcula a posição do mouse em relação ao card
    const mouseX = (clientX - left);
    const mouseY = (clientY - top);

    // Ajusta a sensibilidade da inclinação aqui, valores menores = efeito mais sutil
    const sensitivity = 50;
    const rotateX = ((mouseY / height) * 100 - 50) / sensitivity;
    const rotateY = -(((mouseX / width) * 100 - 50) / sensitivity);

    // Atualiza o estilo para a inclinação
    setStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });

    // Atualiza o estilo para a posição da 'bolha' de desfoque
    setBlurStyle({
      top: `${mouseY}px`,
      left: `${mouseX}px`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    // Remove a inclinação suavemente ao sair
    setStyle({
      transform: 'perspective(700px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
    });

    // Apenas ajusta a opacidade para que a 'bolha' desapareça a partir de onde o mouse estava
    setBlurStyle(prev => ({
      ...prev, // Mantém a posição anterior
      opacity: 0, // Esconde a 'bolha'
      transition: 'opacity 0.5s ease-out', // Transição suave da opacidade
    }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="relative bottom-[7em] p-10 bg-gray-secondary rounded-xl border border-gray-700 transition-transform duration-200 ease-out overflow-hidden"
    >
      {/* Bolha de desfoque */}
      <div
        style={blurStyle}
        className="absolute w-52 h-52 rounded-full bg-green-primary blur-[10em] transition-opacity duration-500 ease-out"
      />
      <div className="relative p-10 h-[20em]">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;
