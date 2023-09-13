import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getLocation, getLocations } from "@/lib/locations";
import Imgix from "@/components/Imgix";

export default async function Gallery({
  params,
}: {
  params: { slug: string };
}) {
  const locationData = await getLocation(params.slug);
  if (typeof locationData.featuredImage === "string") {
    return;
  }

  const sublocations = locationData.sublocations?.map(
    (sublocation, sublocationIndex) => {
      const photos = sublocation.images?.map((photo, photoIndex) => {
        if (typeof photo.image !== "string") {
          return (
            <Link
              key={photoIndex}
              className="w-full aspect-[3/2] relative hover:opacity-50 transition"
              href={`https://krunal-desai.imgix.net/${photo.image.filename}`}
            >
              <Imgix
                src={photo.image.filename!}
                alt={photo.image.alt}
                placeholder="blur"
                blurDataURL={photo.image.blurDataUrl}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
              />
            </Link>
          );
        }
        return;
      });

      return (
        <div
          key={sublocationIndex}
          className="mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-center text-slate-800"
        >
          <h1 className="text-4xl my-20 leading-normal" id={sublocation.slug}>
            {sublocation.title}
          </h1>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {photos}
          </div>
        </div>
      );
    }
  );

  return (
    <main>
      <div className="relative w-full h-[50vh]">
        <Imgix
          className="absolute inset-0 -z-10"
          src={locationData.featuredImage.filename!}
          alt={locationData.featuredImage.alt}
          placeholder="blur"
          blurDataURL={locationData.featuredImage.blurDataUrl}
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="(max-aspect-ratio: 3/4) 75vh, 100vw"
        />
        <Navbar theme="light" />
      </div>
      {sublocations}
    </main>
  );
}

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((location) => ({
    slug: location.slug,
  }));
}
