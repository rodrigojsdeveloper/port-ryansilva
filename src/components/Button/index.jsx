import React from "react"

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
}) => {
  return <>
		<button 
			className="border border-black mx-1 my-3 py-1 px-5 rounded-md font-normal"
			onClick={() => onClick()}
			disabled={disabled}
		> 
			<span>
				{children}
			</span>
		</button>
	</>
}
export default Button