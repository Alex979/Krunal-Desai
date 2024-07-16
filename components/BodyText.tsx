import { Libre_Baskerville } from "next/font/google";
import { ReactNode } from "react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BodyTextProps extends React.HTMLProps<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string | undefined;
}

export default function BodyText({
  children,
  className,
  ...props
}: BodyTextProps) {
  return (
    <p
      className={
        "text-sm md:text-lg leading-loose md:leading-loose " +
        libreBaskerville.className +
        " " +
        className
      }
      {...props}
    >
      {children}
    </p>
  );
}
