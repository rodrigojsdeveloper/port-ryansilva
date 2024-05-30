import React from 'react';
import CodeIcon from "@/components/Svgs/CodeIcon";
import BusinessIcon from "@/components/Svgs/BusinessIcon";
import { useInView } from 'react-intersection-observer';
import Button from '../Button';
import BranchIcon from '../Svgs/BranchBlueIcon';
import Shape1Icon from '../Svgs/Shape1Icon';


const Container = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorrerá apenas uma vez // testar false e tirar fowards do css
    threshold: 0.4, // Trigger quando 50% do item estiver visível
  });

  return (
    <div>
      <div className='flex m-5 h-[15em]'>
        <div className='flex flex-col items-center max-w-[5em] pr-4'>
          <div className="w-[3px] h-full bg-gradient-to-t from-puple-primary from-60% to-transparent rounded-md"/>
          <div className='my-5'>
            <div className="p-4 blur-xl bg-puple-primary"></div>
            <span className='text-white relative top-[-25px] left-[5px]'>
              <CodeIcon/>
            </span>
          </div>
          <div className="w-[3px] h-full bg-gradient-to-b from-puple-primary from-40% to-transparent rounded-md"/>
        </div>
        <div className=''>
          <h1 className="text-5xl md:text-8xl font-semibold text-white-primary">Ryan Barbosa Silva</h1>
          <p className="text-gray-primary text-xl mt-5">Desenvolvedor fullstack</p>
        </div>
      </div>
      <div className='flex m-5 relative h-[30em] bottom-12'>
        <div className='flex flex-col items-center max-w-[5em] pr-4'>
          <div className="w-[3px] h-20 bg-gradient-to-t from-green-primary from-60% to-transparent rounded-md"/>
          <div className='my-8'>
            <div className="p-4 blur-xl bg-green-primary"></div>
            <span className='text-white relative top-[-25px] left-[5px]'>
              <BusinessIcon/>
            </span>
          </div>
          <div className="w-[3px] h-full bg-gradient-to-b from-green-primary from-60% to-transparent rounded-md"/>
        </div>
        <div className='mt-[82px]'>
          <h1 className="text-2xl font-medium text-white-primary">Especialização</h1>
          <div className='mt-10'>
            <h1 className="text-3xl md:text-5xl font-medium text-green-primary">Desenvolvimento ágil</h1>
            <h1 className="text-3xl md:text-5xl font-medium text-white-primary">Soluções funcionais e produtivas</h1>
          </div>
        </div>
        <div className='relative top-[10em] left-32'>
          <Shape1Icon/>
        </div>
      </div>
      <div ref={ref} className={`opacity-0 ${inView ? `animate-slideInRight` : ''} transform`}>
        <img className='relative bottom-[70px] rounded-xl border border-gray-700' src='/ide.png' alt='image'/>
      </div>
      <div className='flex m-5 relative h-[50em] bottom-[90px]'>
        <div className='flex flex-col items-center max-w-[5em] pr-4'>
          <div className="w-[3px] h-full bg-gradient-to-t from-green-primary from-60% to-transparent rounded-md"/>
          <div className="w-[3px] h-full bg-gradient-to-b from-green-primary from-60% to-transparent rounded-md"/>
        </div>
        <div className='mt-[100px] ml-20'>
          <div>
            <div className='w-[35em] mb-2'>
              <p className='text-2xl font-medium text-gray-primary'><span className='text-white-primary'>GitHub Copilot</span> empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.</p>
            </div>
            <Button label='Explore GitHub Copilot'/>
          </div>
          <div className='flex items-center relative left-[-99px]'>
            <BranchIcon/>
            <div>
              <span className='text-xs font-semibold text-green-primary border border-green-primary rounded-full py-[1px] px-2'>Did you know?</span>
              <div className='my-5 w-[35em]'>
                <h1 className="text-3xl md:text-6xl font-medium text-green-primary">22% increase</h1>
                <h1 className="text-xl md:text-2xl font-medium text-white-primary">in developer productivity after three years with GitHub</h1>
              </div>
              <Button label='Read the report '/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
