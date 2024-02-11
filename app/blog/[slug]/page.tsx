import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getLocation, getLocations } from "@/lib/locations";
import Imgix from "@/components/Imgix";
import { getBlogPost, getBlogPosts } from "@/lib/blogPosts";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getBlogPost(params.slug);
  if (typeof blogPost.featuredImage === "string") {
    return;
  }

  return (
    <main>
      <Navbar theme="dark" />
      <div className="container mx-auto pt-40">
        <h1 className="text-4xl my-2">{blogPost.title}</h1>
        <h2 className="text-xl my-2">{blogPost.description}</h2>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }));
}
