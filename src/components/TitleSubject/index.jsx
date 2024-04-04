import React from "react";
import { Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const TitleSubject = ({ label }) => {
  return (
    <div className={`${merriweather.className} mb-4`}>
      <h2 className="text-lg uppercase text-gray-secundary font-medium">{label}</h2>
      <div className="sm:w-[15em] md:w-[20vw] h-[2px] bg-gray-secundary"></div>
    </div>
  );
};

export default TitleSubject;
