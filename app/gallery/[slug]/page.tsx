import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getLocation } from "@/lib/locations";
import { getPhotos } from "@/lib/photos";

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
        <Image
          key={index}
          src={photo.image}
          alt="photo"
          fill
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  ));

  return (
    <main>
      <Navbar theme="dark" />
      <div className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-32 text-center text-slate-800">
        <h1 className="text-5xl mb-20">{locationData.title}</h1>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {photos}
        </div>
      </div>
    </main>
  );
}
