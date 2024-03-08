import React from "react";
import { Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather_Sans({ subsets: ["latin"] });

const SubTitleSubject = ({ label, description }) => {
  return (
    <div className={merriweather.className}>
      <h2 className="font-semibold text-gray-primary uppercase">{label}</h2>
      {description && <p className="font-medium text-sm text-gray-primary mt-1">{description}</p>}
    </div>
  );
};

export default SubTitleSubject;
