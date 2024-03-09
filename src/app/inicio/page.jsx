'use client'

import Button from "@/components/Button";
import Stacks from "@/components/Stacks";
import Qualifications from "@/components/Qualifications";
import FooterPrimary from "@/components/FooterPrimary";
import FooterSecundary from "@/components/FooterSecundary";
import RadioInput from "@/components/RadioInput";
import SubTitleSubject from "@/components/SubTitleSubject";
import DescriptionSecundary from "@/components/DescriptionSecundary";
import BookIcon from "@/components/Svgs/BookIcon";
import HomeIcon from "@/components/Svgs/HomeIcon";
import MessageIcon from "@/components/Svgs/MessageIcon";
import TitleSubject from "@/components/TitleSubject";

export default function Home() {
  return (
  <>
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1>Pagina home</h1>
      <div>
        <Button
          label="Sobre mim"
          icon={<BookIcon />}
          onClick={() => { }}
        />
        <Button
          label="início"
          icon={<HomeIcon />}
          onClick={() => { }}
        />
        <Button
          label="Fale Comigo!"
          icon={<MessageIcon />}
          onClick={() => { }}
        />
      </div>
      <SubTitleSubject label="Meu serviços" description="Metodologias que utilizo no meu dia a dia de trabalho." />
      <TitleSubject label="Projetos" />
      <Stacks pauseOnHover />
      <DescriptionSecundary title="Desenvolvimento Web" description="Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce ou outras aplicações. Promovendo uma boa experiência e otimização de websites." />
      <RadioInput />
      <Qualifications />
    </main>
    <FooterPrimary />
    <FooterSecundary />
  </>
  );
}
