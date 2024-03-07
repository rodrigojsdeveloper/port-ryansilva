import React from "react";
import { Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const TitleSubject = ({ label }) => {
  return (
    <div className={merriweather.className}>
      <h2 className="font-semibold text-lg text-gray-primary">{label}</h2>
      <div className="sm:w-[15em] md:w-[20em] h-1 bg-gray-primary"></div>
    </div>
  );
};

export default TitleSubject;
