import React from "react";
import Button from "../Button";
import { Inter } from "next/font/google";
import HomeIcon from "../Svgs/HomeIcon";
import BookIcon from "../Svgs/BookIcon";
import MessageIcon from "../Svgs/MessageIcon";

const inter = Inter({ subsets: ["latin"] });

const MenuTop = () => {
  return (
    <div className="flex justify-between px-10 items-center border-b border-black">
      <div className="w-1/3 flex justify-between">
        <Button
          label="início"
          icon={<HomeIcon />}
          onClick={() => { }}
          active
        />
        <div>
          <Button
            label="Sobre mim"
            icon={<BookIcon />}
            onClick={() => { }}
          />
          <Button
            label="Fale Comigo!"
            icon={<MessageIcon />}
            onClick={() => { }}
          />
        </div>
      </div>
      <p className={`${inter.className} text-xs`}>© ryanbsdeveloper. Todos os direitos reservados</p>
    </div>
  );
};

export default MenuTop;
