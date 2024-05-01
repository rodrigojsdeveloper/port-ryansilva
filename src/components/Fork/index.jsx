import React from 'react';
import BusinessIcon from '../Svgs/BusinessIcon';
import VisieTextoIcon from '../Svgs/VisieTextoIcon';
import Vero from '../../../public/img/vero.png';
import Uninove from '../../../public/img/uninove.png';
import CalendarHeartIcon from '../Svgs/CalendarHeartIcon';
import CalendarIcon from '../Svgs/CalendarIcon';
import Image from 'next/image';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Fork = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // Adicionando os dados de emprego
  const employmentHistory = [
    {
      id: 1,
      role: "Desenvolvedor fullstack",
      company: "Visie",
      type: "Integral",
      period: "Março 2023 - Presente",
      icon: <VisieTextoIcon width={25} height={25} />
    },
    {
      id: 2,
      role: "Desenvolvedor fullstack",
      company: "Véro",
      type: "Outsourcing",
      period: "Agosto 2022 - Março 2023",
      icon: <Image src={Vero} alt="Vero" width={25} height={25} />
    },
    {
      id: 3,
      role: "Desenvolvedor de Software",
      company: "Freelancer",
      type: "Autônomo",
      period: "Outubro 2021",
      icon: ''
    }
  ];

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
    <div className='mt-10'>
      <Accordion open={open === 1}>
        <AccordionHeader className={'text-white-primary'} onClick={() => handleOpen(1)}>Onde trabalho ou já trabalhei?</AccordionHeader>
        <AccordionBody className={'text-white-primary'}>
          {/* Tabela de histórico de emprego */}
          <div className="text-white-primary border-t border-solid border-slate-700 pointer-events-none">
            {employmentHistory.map((job) => (
              <div key={job.id} className="flex items-center py-2 h-[45px] space-x-6 border-b border-x border-solid border-slate-700 ">
                <div className="pl-2 text-slate-700">{job.id}</div>
                <div className="size-[25px] flex justify-center items-center">{job.icon}</div>
                <h3 className="font-bold w-[30%]">{job.role}</h3>
                <p className="font-bold w-[20%]">{job.company}</p>
                <p className="font-bold w-[20%]">{job.type}</p>
                <div className="w-[20%] flex items-center gap-3 pr-2">
                  <CalendarIcon width={'20'} height={'20'} />
                  <span className="text-xs">{job.period}</span>
                </div>
              </div>
            ))}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className={'text-white-primary'} onClick={() => handleOpen(3)}>
          Onde estudo ou já estudei?
        </AccordionHeader>
        <AccordionBody className={'text-white-primary'}>
          {/* Tabela de histórico de estudo */}
          <div className="text-white-primary border-t border-solid border-slate-700 pointer-events-none">
            {studentHistory.map((job) => (
              <div key={job.id} className="flex items-center py-2 h-[45px] space-x-6 border-b border-x border-solid border-slate-700">
                <div className="pl-2 text-slate-700">{job.id}</div>
                <div className="size-[25px] flex justify-center items-center">{job.icon}</div>
                <h3 className="font-bold w-[30%]">{job.role}</h3>
                <p className="font-bold w-[40%]">{job.company}</p>
                <div className="w-[20%] flex items-center gap-3 pr-2">
                  <CalendarIcon width={'20'} height={'20'} />
                  <span className="text-xs">{job.period}</span>
                </div>
              </div>
            ))}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Fork;
