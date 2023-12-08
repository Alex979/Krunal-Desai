import { BiographyPage, HomePage } from "@/payload/payload-types";
import getPayloadClient from "@/payload/payloadClient";

export async function getHomePage(): Promise<HomePage> {
  const payload = await getPayloadClient();
  const result = await payload.findGlobal({
    slug: "home-page",
    depth: 1,
  });
  return result;
}

export async function getBiographyPage(): Promise<BiographyPage> {
  const payload = await getPayloadClient();
  const result = await payload.findGlobal({
    slug: "biography-page",
    depth: 1,
  });
  return result;
}
