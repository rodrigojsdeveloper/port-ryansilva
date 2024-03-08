import React from "react";
import { Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const TitleSubject = ({ label }) => {
  return (
    <div className={merriweather.className}>
      <h2 className="text-lg uppercase">{label}</h2>
      <div className="sm:w-[15em] md:w-[20vw] h-[1px] bg-black"></div>
    </div>
  );
};

export default TitleSubject;
