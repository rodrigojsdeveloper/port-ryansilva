import React from "react";
import Button from "../Button";
import { Merriweather_Sans } from "next/font/google";
import GithubIcon from "../Svgs/GithubIcon";
import WhatsAppIcon from "../Svgs/WhatsAppIcon";
import LinkedinIcon from "../Svgs/LinkedinIcon";
const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const FooterPrimary = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="my-2 flex justify-between items-center mx-6">
        <div className="w-[10em]">
          <h1 className={`${merriweather.className} text-gray-secundary font-bold`}>
            <span className="text-black font-bold">ryanbs</span>
            developer
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-10 justify-evenly">
          <Button
            label="Linkedin"
            icon={<LinkedinIcon />}
            onClick={() => { }}
          />
          <Button
            label="Github"
            icon={<GithubIcon />}
            onClick={() => { }}
          />
          <Button
            label="Whatsapp"
            icon={<WhatsAppIcon />}
            onClick={() => { }}
          />
        </div>
        <div className="w-[10em]">
        </div>
      </div>
    </>
  );
};

export default FooterPrimary;
