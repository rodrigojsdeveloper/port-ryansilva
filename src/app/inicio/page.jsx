'use client'

import Button from "@/components/Button";
import Stacks from "@/components/Stacks";
import SubTitleSubject from "@/components/SubTitleSubject";
import WaterMark from "@/components/WaterMark";
import BookIcon from "@/components/svgs/BookIcon";
import HomeIcon from "@/components/svgs/HomeIcon";
import MessageIcon from "@/components/svgs/MessageIcon";
import TitleSubject from "@/components/TitleSubject";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pagina home</h1>
      <div>
        <Button
          label="Sobre mim"
          icon={<BookIcon/>}
          onClick={() => {}}
        />
        <Button
          label="início"
          icon={<HomeIcon/>}
          onClick={() => {}}
        />
        <Button
          label="Fale Comigo!"
          icon={<MessageIcon/>}
          onClick={() => {}}
        />
      </div>
      <SubTitleSubject label="Meu serviços" description="Metodologias que utilizo no meu dia a dia de trabalho."/>
      <TitleSubject label="Projetos"/>
      <Stacks pauseOnHover />
      <WaterMark/>
    </main>
  );
}
