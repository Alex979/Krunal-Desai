import signatureLight from "@/images/signature-light.png";
import signatureDark from "@/images/signature-dark.png";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  theme: "light" | "dark";
}

export default function Navbar({ theme }: NavbarProps) {
  return (
    <div className="absolute w-full h-20 flex">
      <div className="flex items-center">
        <Link href="/">
          <Image
            className="mx-5 w-64"
            src={theme === "light" ? signatureLight : signatureDark}
            alt="signature"
          />
        </Link>
      </div>
      <div className="grow">{/* Put nav links here */}</div>
    </div>
  );
}
