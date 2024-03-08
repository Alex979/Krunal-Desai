import { Libre_Baskerville } from "next/font/google";
import { ReactNode } from "react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BodyTextProps {
  children?: ReactNode;
  className?: string | undefined;
}

export default function BodyText({ children, className } : BodyTextProps) {
  return (
    <p className={"text-sm md:text-xl leading-loose md:leading-loose " + libreBaskerville.className + " " + className}>
      {children}
    </p>
  )
}
