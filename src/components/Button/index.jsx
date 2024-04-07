import React from "react";

const Button = ({ label, icon, onClick = () => { }, active, className = "", disabled = false }) => {
	return (
		<>
			<button
				className={`border border-black mx-1 my-3 py-2 px-5 rounded-md font-normal max-h-[38px] ${active && 'bg-black text-white'} ${className}`}
				onClick={onClick}
				disabled={disabled}
			>
				<span className="flex gap-2 items-center justify-center">
					{icon && icon}
					<div className="group relative text-sm overflow-hidden">
						<span className="invisible ">{label}</span>
						<span className="absolute left-0 top-0 cursor-pointer text-sm text-foreground-muted transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full ">{label}</span>
						<span className="absolute left-0 top-0 translate-y-full text-sm text-foreground-muted transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">{label}</span>
					</div>
				</span>
			</button >
		</>
	);
};

export default Button;
