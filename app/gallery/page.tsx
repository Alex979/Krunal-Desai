import ImageSection from "@/components/ImageSection";
import { getLocations } from "@/lib/locations";
import Link from "next/link";

export default async function GalleryHome() {
  const locations = await getLocations();

  return (
    <main>
      {locations.map((location, locationIndex) => {
        if (typeof location.featuredImage === "string") {
          return;
        }

        return (
          <ImageSection
            key={locationIndex}
            image={location.featuredImage}
            priority={locationIndex === 0}
            halfHeight
            navbar={locationIndex === 0}
            noTopPadding={locationIndex !== 0}
          >
            <Link href={`/gallery/${location.slug}`} className="w-full h-full flex items-center justify-center text-white p-3 hover:scale-105 transition">
              <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl text-center">{location.title.toUpperCase()}</h1>
            </Link>
          </ImageSection>
        );
      })}
    </main>
  );
}
