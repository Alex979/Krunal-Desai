import ImageSection from "@/components/ImageSection";
import { getGalleryPage } from "@/lib/globals";
import { getLocations } from "@/lib/locations";
import Link from "next/link";

export default async function GalleryHome() {
  const locations = await getLocations();
  const galleryPage = await getGalleryPage();
  console.log(galleryPage);

  return (
    <main>
      {galleryPage.locations.map((location, locationIndex) => {
        if (typeof location === "string") {
          return;
        }

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
            bgClassName={"bg-black opacity-10"}
          >
            <Link
              href={`/gallery/${location.slug}`}
              className="w-full h-full flex items-end justify-center text-white p-3 hover:scale-105 transition"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl text-center mb-10">
                {location.title.toUpperCase()}
              </h1>
            </Link>
          </ImageSection>
        );
      })}
    </main>
  );
}
