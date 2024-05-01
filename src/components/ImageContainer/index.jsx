import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SubCard from '../SubCard';
import CheckIcon from '../Svgs/CheckIcon';

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
      <img className='z-10 relative bottom-[70px] rounded-xl border border-gray-700' src={src} alt='image' />
      <SubCard title={'Qualificações'} className={'absolute top-[27em] left-[44em] w-[33em] z-20'}>
        <div className="flex items-start gap-3 text-green-primary border-b border-gray-600 py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">Desenvolvimento Web</h3>
            <p className="text-gray-500 text-xs">Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce ou outras aplicações. Promovendo uma boa experiência e otimização de websites.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-green-primary border-b border-gray-600 py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">Desenvolvimento Responsivo</h3>
            <p className="text-gray-500 text-xs">Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e acessível. Ou aplicações 100% móveis, como apps.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-green-primary border-b border-gray-600 py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">Desenvolvimento Backend</h3>
            <p className="text-gray-500 text-xs">Um desenvolvimento focado nas ações que os usuários realizam no frontend, manipulados por aplicativos ou software e a criação de APIs.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-green-primary py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">DevOps</h3>
            <p className="text-gray-500 text-xs">Introduzir processos, ferramentas e metodologias para atender às necessidades ao longo do ciclo de vida do meu software, em todos os processos.</p>
          </div>
        </div>
      </SubCard>

    </div>
  );
};

export default ImageContainer;
