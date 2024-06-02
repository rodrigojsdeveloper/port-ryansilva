import React from 'react';
import VisieTextoIcon from '../Svgs/VisieTextoIcon';
import Vero from '../../../public/img/vero.png';
import Uninove from '../../../public/img/uninove.png';
import Image from 'next/image';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ForkWork = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const studentHistory = [
    {
      id: 1,
      role: "Analíse e desenvolvimento de sistemas (ADS)",
      company: "UNINOVE",
      period: "2023 - 2026",
      icon: <Image src={Uninove} alt="Uninove" width={25} height={25} />
    },
    {
      id: 2,
      role: "Cursos Profissionais online",
      company: "Cursos de tecnologia",
      period: "2019 - Presente",
      icon: ''
    },
    {
      id: 3,
      role: "Ensino médio",
      company: "Escola do Governo de São Paulo",
      period: "2014 - 2021",
      icon: ''
    }
  ];

  return (
    <div className='mt-3'>
      <Accordion open={open === 1} className="drop-shadow-lg mb-2 bg-gray-secondary/70 rounded-lg border border-gray-3 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${open === 1 ? `text-white-primary` : "text-stone-500"}`}
        >
          <div>
            <div className='flex items-center gap-2'>
              Desenvolvedor fullstack
              <span className={`${open !== 1 && "grayscale"}`}>
                <VisieTextoIcon width={60} height={20} />
              </span>
            </div>
            <h3 className='text-xs font-medium text-stone-500'>Março 2023 - Presente (Integral)</h3>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal text-white-primary">
          Atuo com uma variedade de tecnologias em múltiplos projetos, 
          assumindo a responsabilidade pela qualidade e entrega dos softwares. 
          Interajo diretamente com os clientes, gerenciando e resolvendo questões diariamente para garantir a melhor execução e satisfação.  
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="drop-shadow-lg mb-2 bg-gray-secondary/70 rounded-lg border border-gray-3 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${open === 2 ? "text-white-primary" : "text-stone-500"}`}
        >
          <div>
            <div className='flex items-center gap-2'>
              Desenvolvedor fullstack
              <span className={`${open !== 2 && "grayscale"}`}>
                <Image src={Vero} alt="Vero" width={60} height={25} />
              </span>
            </div>
            <h3 className='text-xs font-medium text-stone-500'>Agosto 2022 - Março 2023 (Outsourcing)</h3>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal text-white-primary">
          Na equipe da Vero, fui o principal responsável pelo middleware dos SVAs do provedor, trabalhando na integração parceiros internacionais de diversos países e aprimorando a aplicação conforme surgiam novas necessidades. Também participei ativamente das reuniões de planejamento, alinhamento e definição de novos SVAs.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="drop-shadow-lg mb-2 bg-gray-secondary/70 rounded-lg border border-gray-3 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0  transition-colors ${open === 3 ? "text-white-primary" : "text-stone-500"}`}
        >
          Desenvolvedor de Software
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal text-white-primary">
          Continuo atuando como freelancer em meu tempo livre, desenvolvendo sites, landing pages e realizando manutenções diversas.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default ForkWork;
