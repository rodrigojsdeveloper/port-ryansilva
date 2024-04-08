'use client'

// import Container from "@/components/Container";
import LineContainer from "@/components/LineContainer";
import ImageContainer from "@/components/ImageContainer";
import CodeIcon from "@/components/Svgs/CodeIcon";
import BusinessIcon from "@/components/Svgs/BusinessIcon";
import Shape1Icon from "@/components/Svgs/Shape1Icon";
import Button from "@/components/Button";
import BranchIcon from "@/components/Svgs/BranchIcon";
import DescriptionLeft from "@/components/DescriptionContainer/animationLeft";
import DescriptionRight from "@/components/DescriptionContainer/animationRight";
import Card from "@/components/Card";
import MenuTop from "@/components/MenuTop";
import VisieTextoIcon from "@/components/Svgs/VisieTextoIcon";

export default function Home() {
  return (
    <>
      <MenuTop/>
      <LineContainer LineInitial className="h-[15em]" color="puple-primary" icon={CodeIcon} fromBottomLine="from-40%">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white-primary">Ryan Barbosa Silva</h1>
          <p className="text-gray-primary text-2xl mt-5">Desenvolvedor Full-Stack <span className="text-sm">na</span> <a target="_blank" href="https://www.visie.com.br" className="ml-2 absolute cursor-pointer"><VisieTextoIcon/></a></p>
        </div>
      </LineContainer>
      <LineContainer className="relative h-[30em] bottom-12" heightTopLine="h-20" color="green-primary" icon={BusinessIcon}>
        <div className='mt-[78px]'>
          <h1 className="text-2xl font-medium text-white-primary">Especialização</h1>
          <div className='mt-10'>
            <h1 className="text-3xl md:text-4xl font-medium text-green-primary">Inovação e Eficiência</h1>
            <h1 className="text-3xl md:text-3xl font-medium text-white-primary">Focado em soluções estratégicas full-stack e otimização de CI/CD para maximizar eficiência.</h1>
          </div>
        </div>
      </LineContainer>
      <Shape1Icon className='absolute top-[59em] left-[60em] animate-rotate-180s-linear-infinite' />
      <ImageContainer src={'/ide.png'} />
      <LineContainer animationLine className="relative h-[50em] bottom-[90px]" color="green-primary">
        <div className='mt-[100px] ml-20'>
          <DescriptionRight scrollY={700}>
            <div className='w-[35em] mb-2'>
              <p className='text-2xl font-medium text-gray-primary'><span className='text-white-primary'>GitHub Copilot</span> empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.</p>
            </div>
            <Button label='Explore GitHub Copilot' />
          </DescriptionRight>
          <div className='flex items-center relative left-[-99px]'>
            <BranchIcon />
            <DescriptionLeft scrollY={1200}>
              <div>
                <span className='text-xs font-semibold text-green-primary border border-green-primary rounded-full py-[1px] px-2'>Did you know?</span>
                <div className='my-5 w-[35em]'>
                  <h1 className="text-3xl md:text-6xl font-medium text-green-primary">22% increase</h1>
                  <h1 className="text-xl md:text-2xl font-medium text-white-primary">in developer productivity after three years with GitHub</h1>
                </div>
              </div>
              <Button label='Read the report ' />
            </DescriptionLeft>
          </div>
        </div>
      </LineContainer>
      <Card/>
    </>
  );
}