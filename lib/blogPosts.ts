import { BlogPost } from "@/payload/payload-types";
import getPayloadClient from "@/payload/payloadClient";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "blog-posts",
    depth: 1,
    pagination: false,
  });
  return result.docs;
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "blog-posts",
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
