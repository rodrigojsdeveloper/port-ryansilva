import React from 'react';
import CodeIcon from "@/components/Svgs/CodeIcon";
import BusinessIcon from "@/components/Svgs/BusinessIcon";

const Container = ({icon, color, children }) => {

  // function Line({ color, shadowLine = 'top' }) {
  //   const linearStyle = shadowLine === 'bottom' ? `linear-gradient(${color}, ${color}, transparent)` : `linear-gradient(transparent, ${color}, ${color})`
  //   const lineStyles = {
  //     background: color,
  //     width: '3px',
  //     height: '100%',
  //     background: linearStyle,
  //   };
  
  //   return <div style={lineStyles}></div>;
  // }

  return (
    <div>
      <div className='flex m-5 h-[15em]'>
        <div className='flex flex-col items-center w-[5em]'>
          <div className="w-[3px] h-full bg-gradient-to-t from-puple-primary from-60% to-transparent rounded-md"/>
          <div className='my-5'>
            <div className="p-4 blur-xl bg-puple-primary"></div>
            <span className='text-white absolute top-[270px] left-[50px]'>
              <CodeIcon/>
            </span>
          </div>
          <div className="w-[3px] h-full bg-gradient-to-b from-puple-primary from-40% to-transparent rounded-md"/>
        </div>
        <div className=''>
          <h1 className="text-8xl font-semibold text-white-primary">Ryan Barbosa Silva</h1>
          <p className="text-gray-primary text-xl mt-5">Desenvolvedor fullstack</p>
        </div>
      </div>
      <div className='flex m-5 relative h-[25em] bottom-12'>
        <div className='flex flex-col items-center w-[5em]'>
          <div className="w-[3px] h-20 bg-gradient-to-t from-green-primary from-60% to-transparent rounded-md"/>
          <div className='my-8'>
            <div className="p-4 blur-xl bg-green-primary"></div>
            <span className='text-white absolute top-[87px] left-[30px]'>
              <BusinessIcon/>
            </span>
          </div>
          <div className="w-[3px] h-full bg-gradient-to-b from-green-primary from-60% to-transparent rounded-md"/>
        </div>
        <div className='mt-[75px]'>
          <h1 className="text-2xl font-medium text-white-primary">Especialização</h1>
          <div className='mt-10'>
            <h1 className="text-5xl font-medium text-green-primary">Desenvolvimento ágil</h1>
            <h1 className="text-5xl font-medium text-white-primary">Soluções funcionais e produtivas</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
