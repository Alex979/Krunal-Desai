import "server-only";
import fs from "fs";
import path from "path";

export interface Photograph {
  id: string;
  image: string;
  location: string;
}

const photosDir = path.join(process.cwd(), "data/photographs");

export async function getPhotos(location: string): Promise<Photograph[]> {
  const fileNames = fs.readdirSync(photosDir);
  const photosData = fileNames.reduce((acc: any[], fileName) => {
    const fullPath = path.join(photosDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const photoData = JSON.parse(fileContents);
    if (photoData.location === location) {
      acc.push(photoData);
    }
    return acc;
  }, []);
  return photosData;
}
