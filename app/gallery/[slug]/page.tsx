import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getLocation, getLocations } from "@/lib/locations";
import { getPhotos } from "@/lib/photos";
import NetlifyImage from "@/components/NetlifyImage";
import lion from "../../lion.jpg";
import Image from "next/image";

export default async function Gallery({
  params,
}: {
  params: { slug: string };
}) {
  const locationData = await getLocation(params.slug);

  const sublocations = locationData.sublocations.map(
    (sublocation, sublocationIndex) => {
      const photos = sublocation.images.map((photo, photoIndex) => (
        <div className="w-full aspect-[3/2] relative" key={photoIndex}>
          <Link className="hover:opacity-50 transition" href={photo}>
            <NetlifyImage
              src={photo}
              alt="photo"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </Link>
        </div>
      ));

      return (
        <div
          key={sublocationIndex}
          className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-center text-slate-800"
        >
          <h1 className="text-4xl my-20 leading-normal" id={sublocation.slug}>
            {sublocation.title}
          </h1>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {photos}
          </div>
        </div>
      );
    }
  );

  return (
    <main>
      <div className="relative w-full h-[50vh]">
        <NetlifyImage
          className="absolute inset-0 -z-10"
          src={locationData.thumbnail}
          alt="thumbnail"
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
