'use client'

// import Container from "@/components/Container";
import LineContainer from "@/components/LineContainer";
import ImageContainer from "@/components/ImageContainer";
import Shape1Icon from "@/components/Svgs/Shape1Icon";
import Button from "@/components/Button";
import BranchBlueIcon from "@/components/Svgs/BranchBlueIcon";
import DescriptionLeft from "@/components/DescriptionContainer/animationLeft";
import DescriptionRight from "@/components/DescriptionContainer/animationRight";
import DescriptionBottom from "@/components/DescriptionContainer/animationBottom";
import Card from "@/components/Card";
import VisieTextoIcon from "@/components/Svgs/VisieTextoIcon";
import BranchRedIcon from "@/components/Svgs/BranchRedIcon";
import IntroIcon from "@/components/Svgs/IntroIcon";
import AboutMeIcon from "@/components/Svgs/AboutMeIcon";
import SkillsIcon from "@/components/Svgs/SkillsIcon";
import ProjectIcon from "@/components/Svgs/ProjectIcon";
import Technologies from "@/components/Technologies";
import ContactIcon from "@/components/Svgs/ContactIcon";
import Contact from "@/components/Contact";
import Shape3Icon from "@/components/Svgs/Shape3Icon";
import Shape4Icon from "@/components/Svgs/Shape4Icon";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={'carregando...'}>
      {/* INICIO + SOBRE MIM */}
      <div>
        <LineContainer LineInitial className="h-[15em]" color="white" icon={IntroIcon} fromBottomLine="from-40%">
          <div className="mt-[13px]">
            <h1 className="text-5xl md:text-7xl font-bold leading-[56px] text-white-primary">Ryan Barbosa Silva</h1>
            <p className="text-stone-500 text-2xl mt-5 flex-wrap flex items-center gap-2.5">Desenvolvedor Full-Stack <span className="text-sm">na</span> <a target="_blank" href="https://www.visie.com.br" className="ml-2 cursor-pointer"><VisieTextoIcon /></a></p>
          </div>
        </LineContainer>
        <LineContainer title="Informações sobre mim" className="relative h-[20em] bottom-12" heightTopLine="h-20" color="blue" icon={AboutMeIcon}>
          <DescriptionBottom>
            <div className='mt-[115px]'>
              <div className='mt-10'>
                <h1 className="text-3xl md:text-4xl font-medium text-blue-primary">Inovação e Eficiência</h1>
                <h1 className="text-lg md:text-xl font-medium text-white-primary">Especializado em soluções estratégicas full-stack e otimizações para maximizar eficiência.</h1>
              </div>
            </div>
          </DescriptionBottom>
        </LineContainer>
        <Shape1Icon className='absolute top-[75em] left-[40em] animate-rotate-180s-linear-infinite' />
        <ImageContainer src={'/ide.png'} />
        <LineContainer animationLine className="relative h-[55em] bottom-[90px]" color="blue">
          <div className='mt-[100px] ml-20'>
            <DescriptionRight>
              <div className='w-[35em] mb-2'>
                <p className='text-xl md:text-2xl font-medium text-stone-400 max-sm:text-balance min-w-[20em]'><span className='text-white-primary'>Veja o desenvolvimento</span> do meus projetos que estão em open-source e hospedado, todos no github</p>
              </div>
              <Button label='Ver no github ' />
            </DescriptionRight>
            <div className='flex items-center relative left-[-99px]'>
              <BranchBlueIcon />
              <DescriptionLeft>
                <div>
                  <span className='text-xs font-semibold text-blue-primary border border-blue-primary rounded-full py-[1px] px-2'>Quer se conectar comigo?</span>
                  <div className='my-5 w-full max-w-[35em]'>
                    <h1 className="text-3xl md:text-6xl font-medium text-blue-primary">Meu dia-dia</h1>
                    <h1 className="text-xl md:text-2xl font-medium text-white-primary max-sm:text-balance">Como desenvolvedor estou muito ativo no linkedin, vai lá!</h1>
                  </div>
                </div>
                <Button label='Ver linkedin ' />
              </DescriptionLeft>
            </div>
          </div>
        </LineContainer>
        <div className="flex items-center max-lg:flex-wrap max-lg:gap-5">
          <Card
            title={'Profissional'}
            subtitle={'Minhas experiências profissionais na área'}
            animationInSide="animate-slideInSlowLeft"
            animationOutSide="lefanimate-slideOutSlowLeft"
            color="bg-blue-primary"
            className="h-[25em]"
          >
            {/* <Fork/> */}
          </Card>
          <Card
            title={'Educacional'}
            subtitle={'Minhas principais fonte de conhecimento'}
            animationSide="right"
            animationInSide="animate-slideInSlowRight"
            animationOutSide="lefanimate-slideOutSlowRight"
            color="bg-blue-primary"
            className="h-[25em]"
          >
            {/* <Fork/> */}
          </Card>
        </div>
      </div>

      {/* PROJETOS */}
      <div>
        <Shape3Icon className='absolute left-[-250px] animate-rotate-180s-linear-infinite' />
        <LineContainer title="Projetos desenvolvidos" animationLine className="relative h-[20em] bottom-20" heightTopLine="h-20" color="puple" icon={ProjectIcon}>
          <div className='mt-[70px]'>
            <div className='mt-10'>
              <h1 className="text-3xl md:text-4xl font-medium text-puple-primary">Já foram muitos projetos...</h1>
              <h1 className="text-2xl md:text-xl font-medium text-white-primary">Desde 2019, ganhei experiência com diversas tecnologias para compartilhar minhas ideias.</h1>
            </div>
          </div>
        </LineContainer>
        <div>
          <Card
            title={'Projetos'}
            subtitle={'Alguns dos projetos que se tornaram reais.'}
            animationInSide="animate-slideInFastLeft"
            animationOutSide="lefanimate-slideOutFastLeft"
            color="bg-puple-primary"
            className="h-[25em]"
          >
            {/* <Fork/> */}
          </Card>
        </div>
      </div>

      {/* SKILLS */}
      <div>
        <LineContainer title="Especialização e habilidades" animationLine className="relative h-[45em] bottom-20" heightTopLine="h-20" color="red" icon={SkillsIcon}>
          <div>
            <div className='mt-[130px]'>
              <DescriptionRight>
                <div className='mt-10'>
                  <h1 className="text-3xl md:text-4xl font-medium text-red-primary">Tecnologias e ferramentas</h1>
                  <h1 className="text-xs md:text-base text-white-primary">Especializado em tecnologias como Python, PHP e React, tenho uma predileção pelo desenvolvimento back-end, onde me destaco significativamente. Ainda que prefira back-end, minhas inovações e soluções de alta qualidade também se estendem ao front-end. Além disso, tenho conhecimento em DevOps, o que me capacita a integrar e gerenciar operações de desenvolvimento e infraestrutura eficientemente, assegurando a qualidade e entrega contínua dos sistemas.</h1>
                </div>
              </DescriptionRight>
            </div>
            <div className='ml-20 relative bottom-[45px] flex items-center'>
              <div className='flex items-center relative left-[-115px]'>
                <BranchRedIcon />
                <DescriptionLeft>
                  <div>
                    <span className='text-xs font-semibold text-red-primary border border-red-primary rounded-full py-[1px] px-2'>Principais tecnologias</span>
                    <div className='my-5 w-full max-w-[40em]'>
                      <h1 className="text-3xl md:text-5xl font-medium text-red-primary">Tecnlogias</h1>
                      <h1 className="text-base md:text-lg font-medium text-white-primary max-sm:text-balance">As principais tecnologias que mais utilizo profissionalmente:</h1>
                    </div>
                  </div>
                  <Button label='Certificações ' />
                </DescriptionLeft>
              </div>
              <Technologies />
            </div>
          </div>
        </LineContainer>
        <div>
          <Card
            title={'Emblemas'}
            subtitle={'Alguns brasões que tenho orgulho'}
            animationInSide="animate-slideInFastRight"
            animationOutSide="lefanimate-slideOutFastRight"
            color="bg-red-primary"
            className="h-[8em]"
          >
            {/* <Fork/> */}
          </Card>
        </div>
      </div>

      {/* CONTATO */}
      <div>
        <Shape4Icon className='absolute bottom-[500px] right-[-250px]' />
        <LineContainer title="Entre em contato" animationLine className="relative h-[13em] bottom-20" heightTopLine="h-20" color="pink" icon={ContactIcon}>
          <div className='mt-[100px]'>
            <DescriptionRight>
              <div className='mt-1'>
                <h1 className="text-xl md:text-2xl font-medium text-pink-primary">Algum assunto em mente?</h1>
                <h1 className="text-xs md:text-base text-white-primary">Bora marcar um bate-papo!</h1>
              </div>
            </DescriptionRight>
          </div>
        </LineContainer>
        <Contact />
      </div>
    </Suspense>
  );
}