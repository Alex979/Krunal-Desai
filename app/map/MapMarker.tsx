import Link from "next/link";
import { Sublocation } from "@/lib/locations";
import NetlifyImage from "@/components/NetlifyImage";

export default function MapMarker({ sublocation }: { sublocation: Sublocation }) {
  return (
    <Link href={`/gallery/${sublocation.locationSlug}/#${sublocation.slug}`}>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
        <NetlifyImage
          src={sublocation.thumbnail}
          alt="thumbnail"
          width={128}
          height={128}
          square
        />
      </div>
    </Link>
  );
}
