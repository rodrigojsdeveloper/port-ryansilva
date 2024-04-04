import React from "react";
import Image from "next/image";

const InfoMe = () => {
  return (
    <div className="flex gap-6 items-center">
      <Image width={105} height={105} className="rounded-full" src="/img/eu.png" alt=""/>
      <h1 className="text-2xl font-bold w-[50%] md:w-[100%]">Ryan Barbosa Silva</h1>
    </div>
  );
};

export default InfoMe;
