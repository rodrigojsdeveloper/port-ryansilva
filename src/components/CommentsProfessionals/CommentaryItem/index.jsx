import React from "react";
import { Andada_Pro, Abel } from "next/font/google";
import LinkedinIcon from "@/components/Svgs/LinkedinIcon";
import Image from "next/image";

const andada = Andada_Pro({
  weight: "800",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--open-sans-font",
});
const abel = Abel({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--open-sans-font",
});

const CommentaryItem = ({ children, name, detailProfissional, photo, date, linkedinUrl }) => {
  return (
    <div className="px-20 md:px-32 py-10 min-h-[20em] flex items-start gap-6">
      <Image className="rounded-full border-2 border-black max-md:hidden" src={`/img/${photo}`} width={100} height={100} alt={name} />
      <div className={`${abel.className} flex flex-col justify-center gap-6 `}>
        <div>
          <div className="flex items-center">
            <Image className="rounded-full md:hidden mr-2" src={`/img/${photo}`} width={50} height={50} alt={name} />
            <h1 className={`${andada.className} text-2xl`}>
              {name}
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" className="ml-2 text-blue-700">
                  <LinkedinIcon className="inline align-baseline" />
                </a>
              )}
            </h1>
          </div>
          <h3>{detailProfissional}</h3>
        </div>
        <p className="text-lg">{children}</p>
        <div className="mx-auto w-[80%] min-w-40 h-1 bg-gray-third" />
        <h1 className={`${abel.className} text-lg text-center`}>{date}</h1>
      </div>
    </div>
  );
};

export default CommentaryItem;
