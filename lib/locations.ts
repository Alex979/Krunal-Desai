import "server-only";
import fs from "fs";
import path from "path";
import slugify from "slugify";

export interface Location {
  slug: string;
  title: string;
  thumbnail: string;
  sublocations: Sublocation[];
}

export interface Sublocation {
  slug: string;
  locationSlug: string;
  title: string;
  thumbnail: string;
  coordinates: GeoJSON.Point;
  images: string[];
}

const locationsDir = path.join(process.cwd(), "data/locations");

export async function getLocation(slug: string): Promise<Location> {
  const fileName = `${slug}.json`;
  const fullPath = path.join(locationsDir, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const location = JSON.parse(fileContents);
  location.slug = slug;
  location.sublocations = location.sublocations.map((sublocation: any) => {
    sublocation.slug = slugify(sublocation.title, {
      lower: true,
      strict: true,
    });
    sublocation.locationSlug = location.slug;
    sublocation.coordinates = JSON.parse(sublocation.coordinates);
    return sublocation;
  });
  return location;
}

export async function getLocations(): Promise<Location[]> {
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(locationsDir);
  } catch (err) {
    return [];
  }
  return fileNames
    .filter((it) => it.endsWith(".json"))
    .map((fileName) => {
      const fullPath = path.join(locationsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const location = JSON.parse(fileContents);
      location.slug = fileName.substring(0, fileName.length - 5);
      location.sublocations = location.sublocations.map((sublocation: any) => {
        sublocation.slug = slugify(sublocation.title, {
          lower: true,
          strict: true,
        });
        sublocation.locationSlug = location.slug;
        sublocation.coordinates = JSON.parse(sublocation.coordinates);
        return sublocation;
      });
      return location;
    });
}

export async function getAllSublocations(): Promise<Sublocation[]> {
  const locations = await getLocations();
  return locations.reduce((acc: Sublocation[], location) => {
    return acc.concat(location.sublocations);
  }, []);
}
