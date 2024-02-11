import { ReactNode } from "react";

interface BodyTextProps {
  children?: ReactNode;
  className?: string | undefined;
}

export default function BodyText({ children, className } : BodyTextProps) {
  return (
    <p className={"leading-relaxed text-sm md:text-xl md:leading-loose " + className}>
      {children}
    </p>
  )
}
