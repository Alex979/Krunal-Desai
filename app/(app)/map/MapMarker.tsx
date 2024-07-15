import Link from "next/link";
import { SublocationWithLocationSlug } from "@/lib/locations";
import Imgix from "@/components/Imgix";

export default function MapMarker({
  sublocation,
}: {
  sublocation: SublocationWithLocationSlug;
}) {
  if (typeof sublocation.mapThumbnail === "string") {
    return;
  }

  return (
    <Link href={`/gallery/${sublocation.locationSlug}/#${sublocation.slug}`}>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
        <Imgix
          src={sublocation.mapThumbnail.filename!}
          alt={sublocation.mapThumbnail.alt}
          placeholder="blur"
          blurDataURL={sublocation.mapThumbnail.blurDataUrl || undefined}
          width={128}
          height={128}
          square
        />
      </div>
    </Link>
  );
}
