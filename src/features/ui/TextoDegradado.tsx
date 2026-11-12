import { ReactNode } from "react";

interface TextoDegradadoProps {
  children: ReactNode;
  className?: string;
}

export function TextoDegradado({
  children,
  className = "",
}: TextoDegradadoProps) {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-institucional-300 to-institucional-500 ${className}`}
    >
      {children}
    </span>
  );
}
