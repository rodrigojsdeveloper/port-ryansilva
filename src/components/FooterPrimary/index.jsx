import React from "react";
import { Merriweather_Sans, Abel } from "next/font/google";

const merriweather = Merriweather_Sans({ subsets: ["latin"] });
const abel = Abel({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--open-sans-font",
});

const FooterPrimary = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="flex justify-center">
        <div className="my-10">
          <h1 className={`${merriweather.className} text-gray-secundary font-bold`}>
            <span className="text-black font-bold">ryanbs</span>
            developer
          </h1>
          <p className={`${abel.className} mt-1 text-black w-[90%]`}>"{'The only way to do something great is to love what you do.'}"</p>
          <h2 className="text-gray-secundary text-xs mt-6">Brasil, São Paulo - Guarulhos</h2>
        </div>
      </div>
    </>
  );
};

export default FooterPrimary;
