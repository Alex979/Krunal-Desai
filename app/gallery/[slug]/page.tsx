import fs from 'fs';
import Image, { ImageLoader } from 'next/image';
import path from 'path';

const locationsDir = path.join(process.cwd(), 'data/locations');
const photosDir = path.join(process.cwd(), 'data/photographs');

export default async function Gallery({ params }: { params: { slug: string } }) {
  const locationData = await getLocationData(params.slug);
  const photosData = await getPhotosData(params.slug);

  // const imageLoader: ImageLoader = ({ src, width, quality }) => {
  //   return `${src}?nf_resize=fit&w=${width}`
  // }

  const photos = photosData.map((photo, index) => (
    <Image key={index} src={photo.image} alt="photo" width={500} height={500} />
  ));

  return (
    <main>
      <div className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-32 text-center text-slate-800">
        <h1 className="text-5xl">{locationData.title}</h1>
        {/* {photos} */}
        <div className="grid gap-4 grid-cols-3">
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
          <div className="bg-red-500 w-full aspect-[3/2]"></div>
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
