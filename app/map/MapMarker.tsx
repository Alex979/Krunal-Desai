import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { Location } from "@/lib/locations";

export default function MapMarker({ location }: { location: Location }) {
  return (
    <Link href={"/gallery/" + location.slug}>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
        <Image src={location.thumbnail} alt="thumbnail" fill />
      </div>
    </Link>
  );
}
