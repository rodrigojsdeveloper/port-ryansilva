import React from "react";
import { Abel } from "next/font/google";

const abel = Abel({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--open-sans-font",
});

const CardExperience = ({ children, title, subTitle, date }) => {
  return (
    <section className="w-full flex flex-col gap-2 p-4 border border-black rounded-md">
      <div>
        <h3 className="text-[12px]">{subTitle}</h3>
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">{title}</h1>
          <span className="text-gray-primary text-sm">{date}</span>
        </div>
      </div>
      <div className={`${abel.className}`}>
        {children}
      </div>
    </section>
  );
};

export default CardExperience;
