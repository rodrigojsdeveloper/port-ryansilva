'use client'

import Button from "@/components/Button";
import Stacks from "@/components/Stacks";
import Qualifications from "@/components/Qualifications";
import CardExperience from "@/components/CardExperience";
import FooterPrimary from "@/components/FooterPrimary";
import FooterSecundary from "@/components/FooterSecundary";
import RadioInput from "@/components/RadioInput";
import SubTitleSubject from "@/components/SubTitleSubject";
import CommentsProfessionals from "@/components/CommentsProfessionals";
import CardProject from "@/components/CardProject";
import DescriptionSecundary from "@/components/DescriptionSecundary";
import InfoMe from "@/components/InfoMe";
import BookIcon from "@/components/Svgs/BookIcon";
import DownloadFileIcon from "@/components/Svgs/DownloadFileIcon";
import HomeIcon from "@/components/Svgs/HomeIcon";
import MessageIcon from "@/components/Svgs/MessageIcon";
import TitleSubject from "@/components/TitleSubject";

export default function Home() {
  return (
  <>
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1>Pagina home</h1>
      <CardProject />
      <CommentsProfessionals />
      <InfoMe/>
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
          active
        />
        <Button
          label="Fale Comigo!"
          icon={<MessageIcon />}
          onClick={() => { }}
        />
        <Button
          label={<span className="underline">Baixar currículo</span>}
          icon={<DownloadFileIcon />}
          onClick={() => { }}
        />
      </div>
      <SubTitleSubject label="Meu serviços" description="Metodologias que utilizo no meu dia a dia de trabalho." />
      <TitleSubject label="Projetos" />
      <Stacks pauseOnHover />
      <DescriptionSecundary title="Desenvolvimento Web" description="Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce ou outras aplicações. Promovendo uma boa experiência e otimização de websites." />
      <RadioInput />
      <Qualifications />
      <CardExperience title="Desenvolvedor fullstack" subTitle="(Outsourcing)" date="mar/2023">
        Breve descrição
      </CardExperience>
      <CardExperience title="Freelancer" date="jul/2022">
        Breve descrição
      </CardExperience>
    </main>
    <FooterPrimary />
    <FooterSecundary />
  </>
  );
}
