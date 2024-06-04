'use client'

// import Container from "@/components/Container";
import LineContainer from "@/components/LineContainer";
import Shape1Icon from "@/components/Svgs/Shape1Icon";
import ButtonOutline from "@/components/ButtonOutline";
import BranchBlueIcon from "@/components/Svgs/BranchBlueIcon";
import DescriptionLeft from "@/components/DescriptionContainer/animationLeft";
import DescriptionRight from "@/components/DescriptionContainer/animationRight";
import DescriptionBottom from "@/components/DescriptionContainer/animationBottom";
import Card from "@/components/Card";
import VisieTextoIcon from "@/components/Svgs/VisieTextoIcon";
import BranchGreenIcon from "@/components/Svgs/BranchGreenIcon";
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
import Badges from "@/components/Badges";
import IDEContainer from "@/components/IDEContainer";
import ForkWork from "@/components/ForkWork";
import ForkStudy from "@/components/ForkStudy";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Suspense fallback={'carregando...'}>
      {/* INICIO + SOBRE MIM */}
      <div>
        <LineContainer LineInitial className="h-[15em] max-sm:h-[19em]" color="white" icon={IntroIcon} fromBottomLine="from-40%">
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
                <h1 className="text-sm md:text-base font-medium text-white-primary">Especialista em desenvolvimento Full-Stack, focado em soluções estratégicas que elevam a eficiência operacional.</h1>
              </div>
            </div>
          </DescriptionBottom>
        </LineContainer>
        <Shape1Icon className='absolute top-[75em] right-[-50px] animate-rotate-180s-linear-infinite' />
        <IDEContainer src={'/ide.png'} />
        <LineContainer animationLine className="relative h-[45em] bottom-[90px]" color="blue">
          <div className='mt-[100px] ml-[60px]'>
            <DescriptionRight threshold={0.1}>
              <div className="w-[35em] max-sm:relative max-sm:left-[-40px] max-sm:w-[17em]">
                <div className='mb-2'>
                  <p className='text-xl md:text-2xl font-medium text-stone-400'><span className='text-white-primary'>Veja o desenvolvimento</span> de alguns projetos que estão em open-source e hospedado, todos no github.</p>
                </div>
                <ButtonOutline link={'https://github.com/ryanbsdeveloper'} label='Ver o github ' />
              </div>
            </DescriptionRight>
            <div className='flex items-center relative left-[-80px]'>
              <BranchBlueIcon />
              <DescriptionLeft threshold={0.5}>
                <div>
                  <span className='text-xs font-semibold text-blue-primary border border-blue-primary rounded-full py-[1px] px-2'>E aí, já se conectou comigo?</span>
                  <div className='my-5 w-full max-w-[35em] max-md:w-[15em]'>
                    <h1 className="text-3xl md:text-6xl font-medium text-blue-primary">Meu dia-dia</h1>
                    <h1 className="text-base md:text-xl font-medium text-white-primary max-sm:text-balance">Como desenvolvedor, estou sempre muito ativo no LinkedIn. Vai lá!</h1>
                  </div>
                </div>
                <ButtonOutline link={'https://www.linkedin.com/in/ryanbarbosasilva'} label='Ver o linkedin ' />
              </DescriptionLeft>
            </div>
          </div>
        </LineContainer>
        <div className="grid justify-center-center grid-cols-2 max-md:grid-cols-1 max-lg:gap-5">
          <Card
            title={'Profissional'}
            subtitle={'Minhas experiências profissionais na área'}
            animationInSide="animate-slideInSlowLeft"
            animationOutSide="animate-slideOutSlowLeft"
            color="bg-blue-primary"
          >
            <ForkWork />
          </Card>
          <Card
            title={'Educacional'}
            subtitle={'Minhas principais fontes de conhecimento'}
            animationSide="right"
            animationInSide="animate-slideInSlowRight"
            animationOutSide="animate-slideOutSlowRight"
            color="bg-blue-primary"
          >
            <ForkStudy />
          </Card>
        </div>
      </div>

      {/* PROJETOS */}
      <div>
        <Shape3Icon className='absolute left-[-260px] animate-rotate-180s-linear-infinite' />
        <LineContainer title="Projetos desenvolvidos" animationLine className="relative h-[15em] bottom-[5.5em]" heightTopLine="h-20" color="puple" icon={ProjectIcon}>
          <div className='mt-[70px]'>
            <div className='mt-10'>
              <h1 className="text-2xl md:text-3xl font-medium text-puple-primary">Já foram muitos projetos...</h1>
              <h1 className="text-sm md:text-base font-medium text-white-primary">Desde 2020, ganhei experiência com diversas tecnologias para compartilhar minhas ideias.</h1>
            </div>
          </div>
        </LineContainer>
        <Card
          title={'Projetos'}
          subtitle={'Alguns dos projetos que se tornaram reais.'}
          animationInSide="animate-slideInFastLeft"
          animationOutSide="animate-slideOutFastLeft"
          color="bg-puple-primary"
        >
          <Projects/>
        </Card>
      </div>

      {/* SKILLS */}
      <div>
        <LineContainer title="Especializações" animationLine className="relative h-[45em] max-sm:h-[52em] bottom-[5.5em] responsive-line-skills" heightTopLine="h-20" color="red" icon={SkillsIcon}>
          <div className="w-full">
            <div className='mt-[130px]'>
              <DescriptionRight>
                <div className='mt-10 pr-14'>
                  <h1 className="text-2xl md:text-3xl font-medium text-green-primary">Tecnologias e ferramentas</h1>
                  <h1 className="text-sm md:text-base text-white-primary max-sm:text-balance">Especializado em tecnologias como Python, PHP e React, tenho uma predileção pelo desenvolvimento back-end, onde me destaco significativamente. Ainda que prefira back-end, minhas inovações e soluções de alta qualidade também se estendem ao front-end. Além disso, tenho conhecimento em DevOps, o que me capacita a integrar e gerenciar operações de desenvolvimento e infraestrutura eficientemente, assegurando a qualidade e entrega contínua dos sistemas.</h1>
                </div>
              </DescriptionRight>
            </div>
            <div className='ml-20 relative bottom-[45px] max-md:bottom-[10px] flex items-center'>
              <div className='flex items-center relative left-[-115px]'>
                <BranchGreenIcon />
                <DescriptionLeft>
                  <div>
                    <span className='text-xs font-semibold text-green-primary border border-green-primary rounded-full py-[1px] px-2 text-nowrap'>Meu fluxo de desenvolvimento</span>
                    <div className='my-5 w-full max-w-[35em]'>
                      <h1 className="text-3xl md:text-5xl font-medium text-green-primary">Metodologias</h1>
                      <h1 className="text-sm md:text-base text-white-primary max-sm:text-balance">No meu trabalho, adoto a metodologia Scrum para garantir flexibilidade e eficiência nos projetos. O Test-Driven Development (TDD) é essencial para manter a qualidade do código desde o início. Para aprimorar a entrega contínua, implemento práticas de CI/CD. Além disso, aplico design patterns estrategicamente para resolver problemas comuns de projeto de software, promovendo soluções elegantes e reutilizáveis.</h1>
                    </div>
                  </div>
                  {/* <ButtonOutline label='Certificações ' /> */}
                </DescriptionLeft>
              </div>
              <Technologies />
            </div>
          </div>
        </LineContainer>
        <Card
          title={'Certificações Profissionais'}
          subtitle={'Destaque em qualificações relevantes'}
          animationInSide="animate-slideInFastRight"
          animationOutSide="animate-slideOutFastRight"
          color="bg-green-primary"
          className="h-[8em] max-md:h-[14em]"
        >
          <Badges/>
        </Card>
      </div>

      {/* CONTATO */}
      <div>
        <Shape4Icon className='absolute bottom-[500px] right-[-250px]  animate-rotate-180s-linear-infinite' />
        <LineContainer title="Entre em contato" animationLine className="relative h-[15em] bottom-[5.5em]" heightTopLine="h-20" color="pink" icon={ContactIcon}>
          <div className='mt-[100px]'>
            <DescriptionRight>
              <div className='mt-1'>
                <h1 className="text-2xl md:text-3xl font-medium text-pink-primary">Algum assunto em mente?</h1>
                <h1 className="text-sm md:text-base text-white-primary">Bora marcar um bate-papo!</h1>
              </div>
            </DescriptionRight>
          </div>
        </LineContainer>
        <Contact />
      </div>
    </Suspense>
  );
}