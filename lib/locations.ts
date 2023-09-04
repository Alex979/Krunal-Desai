import "server-only";
import fs from "fs";
import path from "path";

export interface Location {
  slug: string;
  title: string;
  thumbnail: string;
  coordinates: GeoJSON.Point;
}

const locationsDir = path.join(process.cwd(), "data/locations");

export async function getLocation(slug: string): Promise<Location> {
  const fileName = `${slug}.json`;
  const fullPath = path.join(locationsDir, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const location = JSON.parse(fileContents);
  location.coordinates = JSON.parse(location.coordinates);
  location.slug = slug;
  return location;
}

export async function getLocations(): Promise<Location[]> {
  const fileNames = fs.readdirSync(locationsDir);
  return fileNames
    .filter((it) => it.endsWith(".json"))
    .map((fileName) => {
      const fullPath = path.join(locationsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const location = JSON.parse(fileContents);
      location.coordinates = JSON.parse(location.coordinates);
      location.slug = fileName.substring(0, fileName.length - 5);
      return location;
    });
}
