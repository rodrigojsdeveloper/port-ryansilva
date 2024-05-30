'use client'

// import Container from "@/components/Container";
import LineContainer from "@/components/LineContainer";
import ImageContainer from "@/components/ImageContainer";
import Shape1Icon from "@/components/Svgs/Shape1Icon";
import Button from "@/components/Button";
import BranchBlueIcon from "@/components/Svgs/BranchBlueIcon";
import DescriptionLeft from "@/components/DescriptionContainer/animationLeft";
import DescriptionRight from "@/components/DescriptionContainer/animationRight";
import Card from "@/components/Card";
import VisieTextoIcon from "@/components/Svgs/VisieTextoIcon";
import BranchRedIcon from "@/components/Svgs/BranchRedIcon";
import IntroIcon from "@/components/Svgs/IntroIcon";
import AboutMeIcon from "@/components/Svgs/AboutMeIcon";
import SkillsIcon from "@/components/Svgs/SkillsIcon";
import ProjectIcon from "@/components/Svgs/ProjectIcon";

export default function Home() {
  return (
    <>
      <div>
        <LineContainer LineInitial className="h-[15em]" color="white" icon={IntroIcon} fromBottomLine="from-40%">
          <div className="mt-[13px]">
            <h1 className="text-5xl md:text-7xl font-bold leading-[56px] text-white-primary">Ryan Barbosa Silva</h1>
            <p className="text-gray-primary text-2xl mt-5 flex-wrap flex items-center gap-2.5">Desenvolvedor Full-Stack <span className="text-sm">na</span> <a target="_blank" href="https://www.visie.com.br" className="ml-2 cursor-pointer"><VisieTextoIcon /></a></p>
          </div>
        </LineContainer>
        <LineContainer className="relative h-[30em] bottom-12" heightTopLine="h-20" color="blue" icon={AboutMeIcon}>
          <div className='mt-[78px]'>
            <h1 className="text-2xl font-medium text-white-primary">Informações sobre mim</h1>
            <div className='mt-10'>
              <h1 className="text-3xl md:text-4xl font-medium text-blue-primary">Inovação e Eficiência</h1>
              <h1 className="text-3xl md:text-3xl font-medium text-white-primary">Focado em soluções estratégicas full-stack e otimização de CI/CD para maximizar eficiência.</h1>
            </div>
          </div>
        </LineContainer>
        <Shape1Icon className='absolute top-[35em] left-[60em] animate-rotate-180s-linear-infinite' />
        <ImageContainer src={'/ide.png'} />
        <LineContainer animationLine className="relative h-[50em] bottom-[90px]" color="blue">
          <div className='mt-[100px] ml-20'>
            <DescriptionRight scrollY={700}>
              <div className='w-[35em] mb-2'>
                <p className='text-xl md:text-2xl font-medium text-stone-400 max-sm:text-balance min-w-[20em]'><span className='text-white-primary'>Veja o desenvolvimento</span> do meus projetos que estão em open-source e hospedado, todos no github</p>
              </div>
              <Button label='Ver no github ' />
            </DescriptionRight>
            <div className='flex items-center relative left-[-99px]'>
              <BranchBlueIcon />
              <DescriptionLeft scrollY={1200}>
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
            animationSide="left"
            color="bg-blue-primary"
          >
            {/* <Fork/> */}
          </Card>
          <Card
            title={'Educacional'}
            subtitle={'Minhas principais fonte de conhecimento'}
            animationSide="right"
            color="bg-blue-primary"
          >
            {/* <Fork/> */}
          </Card>
        </div>
      </div>
      <div>
        <LineContainer className="relative h-[20em] bottom-20" heightTopLine="h-20" color="puple" icon={ProjectIcon}>
          <div className='mt-[70px]'>
            <h1 className="text-2xl font-medium text-white-primary">Projetos desenvolvidos</h1>
            <div className='mt-10'>
              <h1 className="text-3xl md:text-4xl font-medium text-puple-primary">Já foram muitos projetos...</h1>
              <h1 className="text-2xl md:text-xl font-medium text-white-primary">Aos longos anos desde 2019, já tive experiencia com bastantes tecnologias para expor ideias.</h1>
            </div>
          </div>
        </LineContainer>
        <div>
          <Card
            title={'Projetos'}
            subtitle={'Alguns dos projetos que se tornaram reais.'}
            animationSide="left"
            animationSpeed
            color="bg-puple-primary"
          >
            {/* <Fork/> */}
          </Card>
        </div>
      </div>
      <div>
        <LineContainer className="relative h-[45em] bottom-20" heightTopLine="h-20" color="red" icon={SkillsIcon}>
          <div>
            <div className='mt-[85px]'>
              <h1 className="text-2xl font-medium text-white-primary">Especialização e habilidades</h1>
              <div className='mt-10'>
                <h1 className="text-3xl md:text-4xl font-medium text-red-primary">Tecnologias e ferramentas</h1>
                <h1 className="text-2xl md:text-xl font-medium text-white-primary">Se especializando em tecnologias todos os dias.</h1>
              </div>
            </div>
            <div className='ml-20 flex items-center'>
              <div className='flex items-center relative left-[-115px]'>
                <BranchRedIcon />
                <DescriptionLeft scrollY={1200}>
                  <div>
                    <span className='text-xs font-semibold text-red-primary border border-red-primary rounded-full py-[1px] px-2'>Principais tecnologias</span>
                    <div className='my-5 w-full max-w-[40em]'>
                      <h1 className="text-3xl md:text-5xl font-medium text-red-primary">Tecnlogias</h1>
                      <h1 className="text-base md:text-lg font-medium text-white-primary max-sm:text-balance">As principais tecnologias que utilizo profissionalmente</h1>
                    </div>
                  </div>
                  <Button label='Certificações ' />
                </DescriptionLeft>
              </div>
            </div>
          </div>
        </LineContainer>
        <div>
        </div>
      </div>
    </>
  );
}