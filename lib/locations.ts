import "server-only";
import { Location, Sublocations } from "@/payload/payload-types";
import { getPayload } from "payload";
import configPromise from "../payload/payload.config";

type Sublocation = Exclude<Sublocations, null>[number];

export interface SublocationWithLocationSlug extends Sublocation {
  locationSlug: string;
}

export async function getLocation(slug: string): Promise<Location> {
  const payload = await getPayload({
    config: configPromise,
  });

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
  const payload = await getPayload({
    config: configPromise,
  });

  const result = await payload.find({
    collection: "locations",
    depth: 1,
    pagination: false,
  });
  return result.docs;
}

export async function getAllSublocations(): Promise<
  SublocationWithLocationSlug[]
> {
  const locations = await getLocations();
  return locations.reduce((acc: SublocationWithLocationSlug[], location) => {
    if (location.sublocations) {
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
