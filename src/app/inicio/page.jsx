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

export default function Home() {
  return (
    <>
      <LineContainer LineInitial className="h-[15em]" color="puple-primary" icon={CodeIcon} fromBottomLine="from-40%">
        <div>
          <h1 className="text-5xl md:text-8xl font-semibold text-white-primary">Ryan Barbosa Silva</h1>
          <p className="text-gray-primary text-xl mt-5">Desenvolvedor fullstack</p>
        </div>
      </LineContainer>
      <LineContainer className="relative h-[30em] bottom-12" heightTopLine="h-20" color="green-primary" icon={BusinessIcon}>
        <div className='mt-[82px]'>
          <h1 className="text-2xl font-medium text-white-primary">Especialização</h1>
          <div className='mt-10'>
            <h1 className="text-3xl md:text-5xl font-medium text-green-primary">Desenvolvimento ágil</h1>
            <h1 className="text-3xl md:text-5xl font-medium text-white-primary">Soluções funcionais e produtivas</h1>
          </div>
        </div>
        <div className='relative top-[25em] left-[45em]'>
          <Shape1Icon />
        </div>
      </LineContainer>
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