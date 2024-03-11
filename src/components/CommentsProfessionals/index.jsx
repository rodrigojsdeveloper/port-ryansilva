import React, { useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import CommentaryItem from "./CommentaryItem";
import CommaIcon from "../Svgs/CommaIcon";

import { Abel } from "next/font/google";
const abel = Abel({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--open-sans-font",
});

const CommentsProfessionals = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div onMouseOver={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)} className="relative my-6 w-full min-h-[19em] border-2 border-black shadow-commentary">
      <div className="absolute z-10 bg-gray-third w-[18em] h-[35px] border-2 border-black top-[-19px] left-1/2 transform -translate-x-1/2 shadow-titleCommentary">
        <h1 className={`${abel.className} text-xl text-center m-[1px]`}>
          Comentários de profissionais
        </h1>
      </div>
      <div className="absolute z-10 bg-gray-third w-[2em] h-[2em] border-2 rounded-full border-black bottom-[-30px] left-1/2 transform -translate-x-1/2 shadow-iconCommentary">
        <svg className="absolute w-[3em] h-[3em] border-black bottom-[-5px] left-1/2 transform -translate-x-1/2" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.6349 2.28485C26.3111 0.94812 28.6889 0.94812 30.3651 2.28485V2.28485C31.5294 3.21332 33.0714 3.52005 34.5024 3.1078V3.1078C36.5626 2.51428 38.7594 3.42424 39.7965 5.30067V5.30067C40.5168 6.60402 41.8241 7.47751 43.3039 7.64424V7.64424C45.4343 7.8843 47.1157 9.56567 47.3558 11.6961V11.6961C47.5225 13.1759 48.396 14.4832 49.6993 15.2035V15.2035C51.5758 16.2406 52.4857 18.4374 51.8922 20.4976V20.4976C51.48 21.9286 51.7867 23.4706 52.7152 24.6349V24.6349C54.0519 26.3111 54.0519 28.6889 52.7152 30.3651V30.3651C51.7867 31.5294 51.48 33.0714 51.8922 34.5024V34.5024C52.4857 36.5626 51.5758 38.7594 49.6993 39.7965V39.7965C48.396 40.5168 47.5225 41.8241 47.3558 43.3039V43.3039C47.1157 45.4343 45.4343 47.1157 43.3039 47.3558V47.3558C41.8241 47.5225 40.5168 48.396 39.7965 49.6993V49.6993C38.7594 51.5758 36.5626 52.4857 34.5024 51.8922V51.8922C33.0714 51.48 31.5294 51.7867 30.3651 52.7152V52.7152C28.6889 54.0519 26.3111 54.0519 24.6349 52.7152V52.7152C23.4706 51.7867 21.9286 51.48 20.4976 51.8922V51.8922C18.4374 52.4857 16.2406 51.5758 15.2035 49.6993V49.6993C14.4832 48.396 13.1759 47.5225 11.6961 47.3558V47.3558C9.56567 47.1157 7.8843 45.4343 7.64424 43.3039V43.3039C7.47751 41.8241 6.60402 40.5168 5.30067 39.7965V39.7965C3.42424 38.7594 2.51428 36.5626 3.1078 34.5024V34.5024C3.52005 33.0714 3.21332 31.5294 2.28485 30.3651V30.3651C0.94812 28.6889 0.94812 26.3111 2.28485 24.6349V24.6349C3.21332 23.4706 3.52005 21.9286 3.1078 20.4976V20.4976C2.51428 18.4374 3.42424 16.2406 5.30067 15.2035V15.2035C6.60402 14.4832 7.47751 13.1759 7.64424 11.6961V11.6961C7.8843 9.56567 9.56567 7.8843 11.6961 7.64424V7.64424C13.1759 7.47751 14.4832 6.60402 15.2035 5.30067V5.30067C16.2406 3.42424 18.4374 2.51428 20.4976 3.1078V3.1078C21.9286 3.52005 23.4706 3.21332 24.6349 2.28485V2.28485Z" fill="#D8D8D8" stroke="black" stroke-width="2" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 35.6017L21.8669 34.6072L23.2478 35.4533C24.8449 36.433 26.7539 37 28.8188 37C34.4407 37 39 32.7458 39 27.5C39 22.2542 34.4407 18 28.8188 18C23.1968 18 18.6376 22.2542 18.6376 27.5C18.6376 28.0641 18.6885 28.6163 18.7903 29.1506L19.0416 30.4925L16 35.6017Z" fill="white" stroke="black" stroke-width="2" />
        </svg>
      </div>
      <div className="absolute z-10 bottom-10 right-20">
        <CommaIcon />
      </div>
      <div className="absolute z-10 bg-white w-[17px] h-[17px] border-2 border-black top-[-9px] left-[-9px]"></div>
      <div className="absolute z-10 bg-white w-[17px] h-[17px] border-2 border-black top-[-9px] right-[-9px] shadow-borderTRCommentary"></div>
      <div className="absolute z-10 bg-white w-[17px] h-[17px] border-2 border-black bottom-[-9px] left-[-9px] shadow-borderDLCommentary"></div>
      <div className="absolute z-10 bg-white w-[17px] h-[17px] border-2 border-black bottom-[-9px] right-[-9px] shadow-borderDRCommentary"></div>
      <Carousel
        autoplay={autoplay}
        autoplayDelay={4000}
        loop
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-gray-secundary"}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <CommentaryItem
          name="Cosme Ribeiro da Silva"
          detailProfissional="Desenvolvedor na picpay. (10+ de experiência)"
          linkedinUrl="url"
          date="Concedido no dia 03 de fevereiro de 2024"
          photo="cosme-ribeiro.jpeg"
        >
          Um desenvolvedor que ainda não tive a chance de trabalhar,
          mais conheço suas metodologias e um pouco do seu trabalho, e digo!
          Ter esse talento na equipe com certeza é um diferencial.
        </CommentaryItem>
        <CommentaryItem
          name="Cosme Ribeiro da Silva"
          detailProfissional="Desenvolvedor na picpay. (10+ de experiência)"
          linkedinUrl="url"
          date="Concedido no dia 03 de fevereiro de 2024"
          photo="cosme-ribeiro.jpeg"
        >
          Um desenvolvedor que ainda não tive a chance de trabalhar,
          mais conheço suas metodologias e um pouco do seu trabalho, e digo!
          Ter esse talento na equipe com certeza é um diferencial.
        </CommentaryItem>
        <CommentaryItem
          name="Cosme Ribeiro da Silva"
          detailProfissional="Desenvolvedor na picpay. (10+ de experiência)"
          linkedinUrl="url"
          date="Concedido no dia 03 de fevereiro de 2024"
          photo="cosme-ribeiro.jpeg"
        >
          Um desenvolvedor que ainda não tive a chance de trabalhar,
          mais conheço suas metodologias e um pouco do seu trabalho, e digo!
          Ter esse talento na equipe com certeza é um diferencial.
        </CommentaryItem>
      </Carousel>
    </div>
  );
};

export default CommentsProfessionals;
