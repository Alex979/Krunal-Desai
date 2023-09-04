import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { Location } from "@/lib/locations";
import NetlifyImage from "@/components/NetlifyImage";

export default function MapMarker({ location }: { location: Location }) {
  return (
    <Link href={"/gallery/" + location.slug}>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
        <NetlifyImage
          src={location.thumbnail}
          alt="thumbnail"
          width={128}
          height={128}
          square
        />
      </div>
    </Link>
  );
}
