import React from 'react';
import Image from 'next/image';
import CalendarIcon from '../Svgs/CalendarIcon';
import UninoveImage from '../Svgs/UninoveIcon/sistemas-internet-uninove.png';

import { Merriweather_Sans } from "next/font/google";
import VisieTextoIcon from '../Svgs/VisieTextoIcon';
import CalendarHeartIcon from '../Svgs/CalendarHeartIcon';
import VeroImage from '../Svgs/VeroIcon/vero-logo.png';
import RotateIcon from '../Svgs/RotateIcon';
import VisieIcon from '../Svgs/VisieIcon';
const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const Qualifications = ({ activeTab = 'work' }) => {
  return (
    <div className='sm:w-[25em] md:w-[30em]'>
      <div style={{ display: activeTab === 'education' ? 'block' : 'none' }}>
        <div className="qualification_data">
          <div></div>
          <div>
            <span className="qualification_circle"></span>
            <span className="qualification_line"></span>
          </div>
          <div className="text-data">
            <div className={`${merriweather.className} mb-2`}>
              <Image alt='uninove' src={UninoveImage} height={35} />
              <span className='text-xs font-medium'>
                (Ensino Superior)
              </span>
            </div>
            <span className="inline-block text-sm mb-2 font-medium text-gray-primary">Analíse e desenvolvimento de sistemas (ADS)</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CalendarIcon /> 2023 - 2026
            </div>
          </div>
        </div>
        <div className="qualification_data">
          <div className="text-data">
            <span className={`${merriweather.className} text-2xl`}>Cursos Profissionais online</span>
            <span className="inline-block text-sm mb-2 font-medium text-gray-primary">Cursos de tecnologia</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CalendarIcon /> 2019 - Presente
            </div>
          </div>
          <div>
            <span className="qualification_circle"></span>
            <span className="qualification_line"></span>
          </div>
        </div>

        <div className="qualification_data">
          <div></div>
          <div>
            <span className="qualification_circle"></span>
            <span className="qualification_line"></span>
          </div>
          <div className="text-data">
            <span className={`${merriweather.className} text-2xl`}>Ensino médio</span>
            <span className="inline-block text-sm mb-2 font-medium text-gray-primary">Escola do Governo de São Paulo</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CalendarIcon /> 2014 - 2021
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: activeTab === 'work' ? 'block' : 'none' }}>
        <div className="qualification_data">
          <div></div>
          <div>
            <span className="qualification_circle"></span>
            <span className="qualification_line"></span>
          </div>
          <div className="text-data">
            <div className={`${merriweather.className} mb-2`}>
              <VisieTextoIcon/>
            </div>
            <span className="inline-block text-sm mb-2 font-medium text-gray-primary">Desenvolvedor fullstack</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CalendarHeartIcon /> Março 2023 - Presente
            </div>
          </div>
        </div>
        <div className="qualification_data">
          <div className="text-data">
            <div className={`${merriweather.className} mb-2`}>
              <div className='flex items-center gap-3'>
                <Image alt='uninove' src={VeroImage} height={35} />
                <RotateIcon/>
                <VisieIcon/>
              </div>
              <span className='text-xs font-medium'>
                (Outsourcing)
              </span>
            </div>
            <span className="inline-block text-sm mb-2 font-medium text-gray-primary">Desenvolvedor fullstack</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CalendarIcon /> Agosto 2022 - Março 2023
            </div>
          </div>
          <div>
            <span className="qualification_circle"></span>
            <span className="qualification_line"></span>
          </div>
        </div>

        <div className="qualification_data">
          <div></div>
          <div>
            <span className="qualification_circle"></span>
            <span className="qualification_line"></span>
          </div>
          <div className="text-data">
            <span className={`${merriweather.className} text-2xl`}>Freelancer</span>
            <span className="inline-block text-sm mb-2 font-medium text-gray-primary">Desenvolvedor de Software</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CalendarIcon /> Outubro 2021
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Qualifications;
