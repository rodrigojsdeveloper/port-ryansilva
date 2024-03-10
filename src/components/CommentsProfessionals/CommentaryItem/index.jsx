import React from "react";
import { Andada_Pro, Abel } from "next/font/google";
import LinkedinIcon from "@/components/Svgs/LinkedinIcon";

const andada = Andada_Pro({
    weight: "800",
    style: "normal",
    display: "swap",
    subsets: ["latin"],
    variable: "--open-sans-font",
});
const abel = Abel({
    weight: "400",
    style: "normal",
    display: "swap",
    subsets: ["latin"],
    variable: "--open-sans-font",
});

const CommentaryItem = ({children, name, detailProfissional, photo, date, linkedinUrl}) => {
    return (
        <div className={`${abel.className} w-[35%] m-auto mt-12`}>
					<div className="mb-4">
						<div className="flex items-center">
            	<h1 className={`${andada.className} text-2xl`}>{name}</h1>
							{linkedinUrl && <span className="ml-3 text-blue-700"><LinkedinIcon /></span>}
						</div>
						<h3>{detailProfissional}</h3>
					</div>
					<p className="text-lg">{children}</p>
        </div>
    );
};

export default CommentaryItem;
