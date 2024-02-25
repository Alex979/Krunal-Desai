import Imgix from "@/components/Imgix";
import { Media } from "@/payload/payload-types";
import Link from "next/link";
import { BlogPost } from "@/payload/payload-types";

export default function BlogPost({ blogPost }: { blogPost: BlogPost }) {
  if (typeof blogPost.featuredImage === "string") {
    return;
  }

  return (
    <Link href={`/blog/${blogPost.slug}`} className="hover:opacity-80 transition">
      <div className="w-full aspect-[3/2] relative">
        <Imgix
          className="w-full h-full"
          src={blogPost.featuredImage.filename!}
          alt={blogPost.featuredImage.alt}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL={blogPost.featuredImage.blurDataUrl}
          sizes="33vw"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold">{blogPost.title}</h2>
        <h3 className="text-lg">{blogPost.description}</h3>
      </div>
    </Link>
  );
}
