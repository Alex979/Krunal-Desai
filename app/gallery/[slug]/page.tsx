import fs from 'fs';
import Image, { ImageLoader } from 'next/image';
import path from 'path';
import Link from 'next/link';

const locationsDir = path.join(process.cwd(), 'data/locations');
const photosDir = path.join(process.cwd(), 'data/photographs');

export default async function Gallery({ params }: { params: { slug: string } }) {
  const locationData = await getLocationData(params.slug);
  const photosData = await getPhotosData(params.slug);

  // const imageLoader: ImageLoader = ({ src, width, quality }) => {
  //   return `${src}?nf_resize=fit&w=${width}`
  // }

  const photos = photosData.map((photo, index) => (
    <div className="w-full aspect-[3/2] relative overflow-hidden">
      <Link className="hover:opacity-50" href={photo.image}>
        <Image key={index} src={photo.image} alt="photo" fill style={{objectFit: 'contain'}} />
      </Link>
    </div>
  ));

  return (
    <main>
      <div className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-32 text-center text-slate-800">
        <h1 className="text-5xl mb-10">{locationData.title}</h1>
        {/* {photos} */}
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {photos}
        </div>
      </div>
    </main>
  );
}

async function getLocationData(slug: string) {
  const fileName = `${slug}.json`;
  const fullPath = path.join(locationsDir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

async function getPhotosData(slug: string) {
  const fileNames = fs.readdirSync(photosDir);
  const photosData = fileNames.reduce((acc: any[], fileName) => {
    const fullPath = path.join(photosDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const photoData = JSON.parse(fileContents);
    if (photoData.location === slug) {
      acc.push(photoData);
    }
    return acc;
  }, []);
  return photosData;
}

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(locationsDir);
  const locationsData = fileNames.filter(it => it.endsWith('.json')).map(fileName => {
    const fullPath = path.join(locationsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  });

  return locationsData.map(location => {
    location: location.title;
  });
}
