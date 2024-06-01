/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SubCard from '../SubCard';
import IDE from './IDE';
import CheckIcon from '../Svgs/CheckIcon';

const IDEContainer = () => {
  return (
    <div className='transform mx-4'>
      <IDE className='z-10 relative bottom-[70px] rounded-xl border border-gray-3'/>
      <SubCard title={'Meu serviços'} className={'absolute top-[40em] left-[47em] w-[33em] z-20'}>
        <div className="flex items-start gap-3 text-blue-primary border-b border-gray-600 py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">Desenvolvimento Web</h3>
            <p className="text-stone-400 text-xs">Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce ou outras aplicações. Promovendo uma boa experiência e otimização de websites.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-blue-primary border-b border-gray-600 py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">Desenvolvimento Responsivo</h3>
            <p className="text-stone-400 text-xs">Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e acessível. Ou aplicações 100% móveis, como apps.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-blue-primary border-b border-gray-600 py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">Desenvolvimento Backend</h3>
            <p className="text-stone-400 text-xs">Um desenvolvimento focado nas ações que os usuários realizam no frontend, manipulados por aplicativos ou software e a criação de APIs.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-blue-primary py-4">
          <CheckIcon width={'45'} height={'20'}/>
          <div>
            <h3 className="text-white-primary text-sm font-medium">DevOps</h3>
            <p className="text-stone-400 text-xs">Introduzir processos, ferramentas e metodologias para atender às necessidades ao longo do ciclo de vida do meu software, em todos os processos.</p>
          </div>
        </div>
      </SubCard>

    </div>
  );
};

export default IDEContainer;
