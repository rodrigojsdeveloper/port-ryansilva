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

const DescriptionSecundary = ({ title, description }) => {
  return (
    <div>
      <h1 className={`${merriweather.className} font-semibold`}>{title}</h1>
      <p className={`${abel.className} mt-4`}>{description}</p>
    </div>
  );
};

export default DescriptionSecundary;
