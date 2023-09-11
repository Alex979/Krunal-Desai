import "server-only";
import { Location, Sublocation } from "@/payload/payload-types";
import { getPayloadClient } from "@/payload/payloadClient";

export async function getLocation(slug: string): Promise<Location> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "locations",
    depth: 1,
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  return result.docs[0];
}

export async function getLocations(): Promise<Location[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "locations",
    depth: 1,
    pagination: false,
  });
  return result.docs;
}

export async function getAllSublocations(): Promise<Sublocation[]> {
  const locations = await getLocations();
  return locations.reduce((acc: Sublocation[], location) => {
    if (location.sublocations !== undefined) {
      return acc.concat(location.sublocations);
    }
    return acc;
  }, []);
}
