import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getLocation, getLocations } from "@/lib/locations";
import Imgix from "@/components/Imgix";
import ImageSection from "@/components/ImageSection";
import NewsletterSection from "@/components/NewsletterSection";

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
                blurDataURL={photo.image.blurDataUrl || undefined}
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
          id={sublocation.slug || undefined}
          className="mx-auto my-2 px-3 md:px-16 lg:px-24 2xl:px-32"
        >
          <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
            <div className="w-full aspect-[3/2] lg:aspect-auto p-[8vw] md:p-[4vw] lg:p-[2.5vw] 2xl:p-[2vw]">
              <div className="flex justify-between">
                <h1 className="text-[8vw] lg:text-[3vw] 2xl:text-[2.3vw] leading-snug mb-[2vw] md:mb-[1vw] lg:mb-[0.6vw] 2xl:mb-[0.5vw]">
                  {sublocation.title}
                </h1>
                <Link
                  href={`https://www.google.com/maps/place/${sublocation.coordinates[1]},${sublocation.coordinates[0]}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-[5vw] lg:text-[1.5vw] 2xl:text-[1.2vw] leading-normal">
                {sublocation.shortDescription}
              </p>
            </div>
            <div className="lg:col-span-2 2xl:col-span-3">
              <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {photos}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <main>
      <ImageSection
        image={locationData.featuredImage}
        priority
        navbar
        halfHeight
        bgClassName="bg-gradient-to-b from-black to-transparent to-40% opacity-30"
      >
        <div className="w-full h-full flex justify-center items-center text-white p-3">
          <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl text-center">
            {locationData.title.toUpperCase()}
          </h1>
        </div>
      </ImageSection>
      <div className="py-16 space-y-16">{sublocations}</div>
      <NewsletterSection />
    </main>
  );
}
