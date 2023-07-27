import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

export default function MapMarker({thumbnail}: {thumbnail: StaticImageData}) {
  return (
    <Link href="/">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <Image src={thumbnail} alt="thumbnail" />
      </div>
    </Link>
  );
};
