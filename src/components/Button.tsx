import { ReactNode } from "react";

interface ButtonProps {
  buttonType?: string; 
  type?: "button" | "submit" | "reset";  
  children: ReactNode;
  onClick?: ()  => Promise<void>
}

export default function Button({ onClick , buttonType, type = "button", children }: ButtonProps) {
  return (
    <button onClick={onClick}
      type={type}  
      className={`h-[46px] w-full bg-[#473a2b] 
      hover:bg-[#322618] text-white cursor-pointer rounded-[5px] ${buttonType === "secondary" ? "opacity-[85%]" : ""}`}
    >
      {children}
    </button>
  );
}
