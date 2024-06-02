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

const ForkStudy = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='mt-3'>
      <Accordion open={open === 1} className="shadow-lg mb-2 bg-gray-secondary/70 rounded-lg border border-gray-3 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${open === 1 ? `text-white-primary` : "text-stone-500"}`}
        >
          <div>
            <div className='flex items-center gap-2'>
                Analíse e desenvolvimento de sistemas (ADS)
              <span className={`${open !== 1 && "grayscale"}`}>
                <Image src={Uninove} alt="Uninove" width={90} height={70} />
              </span>
            </div>
            <h3 className='text-xs font-medium text-stone-500'>2023 - 2026</h3>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal text-white-primary">
          Embora já estivesse estabelecido na área, optei por ingressar
          no curso de ADS na Uninove. A decisão foi motivada pelo
          meu compromisso em aprimorar continuamente minhas habilidades e qualificações profissionais,
          reconhecendo que uma formação acadêmica formal é fundamental para alcançar os objetivos de carreira que estabeleci para mim mesmo.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="shadow-lg mb-2 bg-gray-secondary/70 rounded-lg border border-gray-3 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${open === 2 ? "text-white-primary" : "text-stone-500"}`}
        >
          <div>
            <div className='flex items-center gap-2'>
              Cursos Profissionais
            </div>
            <h3 className='text-xs font-medium text-stone-500'>Presente - Sempre</h3>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal text-white-primary">
          Sempre estou aprimorando minhas habilidades através de cursos profissionais, buscando sempre ficar atualizado com as evoluções constante da área e preparar-me para certificações importantes.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="shadow-lg mb-2 bg-gray-secondary/70 rounded-lg border border-gray-3 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0  transition-colors ${open === 3 ? "text-white-primary" : "text-stone-500"}`}
        >
          <div>
            <div className='flex items-center gap-2'>
              Livros
            </div>
            <h3 className='text-xs font-medium text-stone-500'>Presente - Regularmente</h3>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal text-white-primary">
            Regularmente, dou um tempo à leitura de livros focado nas tecnologias que mais curto, como Python, além de ler obras sobre estruturas de código e outros temas técnicos, buscando ter mais conhecimento e habilidade.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default ForkStudy;
