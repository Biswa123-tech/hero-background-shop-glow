
import React from "react";
import { cn } from "@/lib/utils";

interface BuyNowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "relative overflow-hidden px-8 h-12 rounded-full font-bold text-white transition-transform duration-200 " +
        "shadow-[0_0_12px_2px_rgba(103,200,255,0.35)] bg-gradient bg-gradient-to-r " +
        "from-green-400 via-blue-500 to-purple-500 bg-[length:400%_400%] animate-gradient-shift " +
        "hover:scale-105 focus:scale-105 hover:shadow-[0_0_24px_6px_rgba(103,200,255,0.36)] " +
        "focus:shadow-[0_0_30px_10px_rgba(106,100,255,0.49)] " +
        "before:content-[''] before:absolute before:inset-0 before:rounded-full before:z-[-1] " +
        "before:bg-gradient-to-r before:from-green-400 before:via-blue-500 before:to-purple-500 " +
        "before:blur-[8px] before:opacity-70 " +
        "animate-fade-in " + // smooth entrance from tailwind (if supported)
        className
      )}
      style={{
        background: "linear-gradient(90deg, #38ef7d 15%, #43e9fe 50%, #8f6ed5 85%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 5s ease-in-out infinite, fade-in 0.4s",
      }}
    >
      {children}
      <style>
        {`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </button>
  );
};

export default BuyNowButton;
