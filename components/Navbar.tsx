import signatureLight from "@/images/signature-light.png";
import signatureDark from "@/images/signature-dark.png";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  theme: "light" | "dark";
}

export default function Navbar({ theme }: NavbarProps) {
  return (
    <div className="absolute w-full flex h-16 sm:h-20 z-10">
      <div className="flex items-center">
        <Link href="/">
          <Image
            className="mx-2 w-44 sm:mx-5 sm:w-64"
            src={theme === "light" ? signatureLight : signatureDark}
            alt="signature"
          />
        </Link>
      </div>
      <div className="grow px-5 flex items-center justify-end space-x-6">
        <Link
          href="/map"
          className="text-white hover:text-gray-300 transition text-lg"
        >
          Map
        </Link>
        <Link
          href="/gallery"
          className="text-white hover:text-gray-300 transition text-lg"
        >
          Gallery
        </Link>
      </div>
    </div>
  );
}
