import ImageSection from "@/components/ImageSection";
import { getBlogPage } from "@/lib/globals";
import BlogPost from "./BlogPost";
import { getBlogPosts } from "@/lib/blogPosts";

export default async function BiographyPage() {
  const blogPage = await getBlogPage();
  const blogPosts = await getBlogPosts();

  if (typeof blogPage.featuredImage === "string") {
    return;
  }

  return (
    <main>
      <ImageSection
        priority
        image={blogPage.featuredImage}
        navbar
        halfHeight
        bgClassName="bg-gradient-to-b from-black to-transparent to-40% opacity-30"
      ></ImageSection>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-8">
          {blogPosts.map((blogPost, index) => {
            return <BlogPost key={index} blogPost={blogPost} />;
          })}
        </div>
      </div>
    </main>
  );
}
