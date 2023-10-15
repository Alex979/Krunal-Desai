import { BiographyPage } from "@/payload/payload-types";
import getPayloadClient from "@/payload/payloadClient";

export async function getBiographyPage(): Promise<BiographyPage> {
  const payload = await getPayloadClient();
  const result = await payload.findGlobal({
    slug: "biography-page",
    depth: 1,
  });
  return result;
}
