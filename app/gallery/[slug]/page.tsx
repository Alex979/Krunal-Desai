import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getLocation } from "@/lib/locations";
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
  const photosData = await getPhotos(params.slug);

  const photos = photosData.map((photo, index) => (
    <div className="w-full aspect-[3/2] relative overflow-hidden" key={index}>
      <Link className="hover:opacity-50 transition" href={photo.image}>
        <NetlifyImage
          key={index}
          src={photo.image}
          alt="photo"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </Link>
    </div>
  ));

  return (
    <main>
      <div className="relative w-full h-[50vh]">
        <Image
          className="absolute inset-0 -z-10"
          src={lion}
          alt="lion"
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          priority
          sizes="(max-aspect-ratio: 3/4) 75vh, 100vw"
        />
        <Navbar theme="light" />
      </div>
      <div className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-center text-slate-800">
        <h1 className="text-4xl my-20 leading-normal">{locationData.title}</h1>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {photos}
        </div>
      </div>
    </main>
  );
}
