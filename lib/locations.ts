import "server-only";
import { Location, Sublocations } from "@/payload/payload-types";
import { getPayloadClient } from "@/payload/payloadClient";

export type Sublocation = Sublocations[number];

export interface SublocationWithLocationSlug extends Sublocation {
  locationSlug: string;
}

export async function getLocation(slug: string): Promise<Location> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "locations",
    depth: 1,
    limit: 1,
    pagination: false,
    showHiddenFields: true,
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
    showHiddenFields: true,
  });
  return result.docs;
}

export async function getAllSublocations(): Promise<
  SublocationWithLocationSlug[]
> {
  const locations = await getLocations();
  return locations.reduce((acc: SublocationWithLocationSlug[], location) => {
    if (location.sublocations !== undefined) {
      return acc.concat(
        location.sublocations.map((sublocation) => {
          return {
            ...sublocation,
            locationSlug: location.slug!,
          };
        })
      );
    }
    return acc;
  }, []);
}
