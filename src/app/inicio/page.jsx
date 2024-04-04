'use client'

import Layout from "@/components/Layout";
import InfoMe from "@/components/InfoMe";
import DescriptionSecundary from "@/components/DescriptionSecundary";
import Button from "@/components/Button";
import LinkedinIcon from "@/components/Svgs/LinkedinIcon";
import GithubIcon from "@/components/Svgs/GithubIcon";
import WhatsAppIcon from "@/components/Svgs/WhatsAppIcon";
import CardExperience from "@/components/CardExperience";
import DownloadFileIcon from "@/components/Svgs/DownloadFileIcon";
import CardProject from "@/components/CardProject";
import TitleSubject from "@/components/TitleSubject";
import CommentsProfessionals from "@/components/CommentsProfessionals";
import Image from "next/image";
import RotateIcon from "@/components/Svgs/RotateIcon";
import VisieIcon from "@/components/Svgs/VisieIcon";
import VeroImage from '@/components/Svgs/VeroIcon/vero-logo.png';
import ProjectIcon from "@/components/Svgs/ProjectIcon";

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center w-full gap-24">
        <div className="flex flex-col w-1/2 gap-6">
          <div>
            <InfoMe />
            <br />
            <DescriptionSecundary title="Especialização" description="Desenvolvedor com foco em Python, habilidades full-stack e experiência em práticas DevOps, destacando-me na criação de pipelines de CI/CD e automação de infraestrutura. Comprometido em contribuir de maneira impactante para o sucesso de cada projeto." />
            <div className="flex items-center gap-2 justify-between">
              <Button
                label="Linkedin"
                icon={<LinkedinIcon />}
                onClick={() => { }}
              />
              <Button
                label="Github"
                icon={<GithubIcon />}
              />
              <Button
                label="Whatsapp"
                icon={<WhatsAppIcon />}
                onClick={() => { }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
          <CardExperience title={
              <span className="flex gap-2"> Desenvolvedor fullstack
                <div className='flex items-center'>
                  <VisieIcon height="18" width="18" />
                </div>
              </span>
            }
            date="mar/2023">
              Breve descrição
            </CardExperience>
            <CardExperience title={
              <span className="flex gap-2"> Desenvolvedor fullstack
                <div className='flex items-center gap-1'>
                  <Image alt='uninove' src={VeroImage} height={16} />
                  <RotateIcon height="16"/>
                  <VisieIcon height="18" width="18" />
                </div>
              </span>
            } subTitle="(Outsourcing)" date="mar/2023">
              Breve descrição
            </CardExperience>
            <CardExperience title="Freelancer" date="mar/2023">
              Breve descrição
            </CardExperience>
          </div>
          <Button
            className="w-[11em]"
            label={<span className="underline">Baixar currículo</span>}
            icon={<DownloadFileIcon />}
            onClick={() => { }}
          />
        </div>
        <div className="flex flex-col w-full">
          <div>
            <TitleSubject label="Projetos" />
            <CardProject />
            <div className="w-full text-end">
              <Button
                className="w-[15em]"
                label={<span className="underline">Ver todos os projetos</span>}
                icon={<ProjectIcon />}
                onClick={() => { }}
              />
            </div>
          </div>
          <div>
            <TitleSubject label="Comentários" />
            <CommentsProfessionals />
          </div>
        </div>
      </div>
    </Layout>
  );
}
