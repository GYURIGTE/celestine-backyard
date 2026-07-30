import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-green-400/80 text-white hover:bg-green-700",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
    tertiary: "bg-transparent text-blue-600 hover:underline px-0 py-0 rounded-none",
  };

  return (
    <button className={cn("cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none px-10 py-3 rounded-lg text-lg", 
      variantStyles[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  );
}