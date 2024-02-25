import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getLocation, getLocations } from "@/lib/locations";
import Imgix from "@/components/Imgix";
import { getBlogPost, getBlogPosts } from "@/lib/blogPosts";
import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text, Node } from "slate";
import ImageSection from "@/components/ImageSection";

const serialize = (children: any[]) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      // @ts-ignore
      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      // @ts-ignore
      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      // @ts-ignore
      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return (
          <h1 className="text-4xl my-2" key={i}>
            {serialize(node.children)}
          </h1>
        );
      case "h2":
        return (
          <h2 className="text-3xl my-2" key={i}>
            {serialize(node.children)}
          </h2>
        );
      case "h3":
        return (
          <h3 className="text-2xl my-2" key={i}>
            {serialize(node.children)}
          </h3>
        );
      case "h4":
        return (
          <h4 className="text-xl my-2" key={i}>
            {serialize(node.children)}
          </h4>
        );
      case "h5":
        return (
          <h5 className="text-lg my-2" key={i}>
            {serialize(node.children)}
          </h5>
        );
      case "h6":
        return (
          <h6 className="text-md my-2" key={i}>
            {serialize(node.children)}
          </h6>
        );
      case "quote":
        return <blockquote className="my-2" key={i}>{serialize(node.children)}</blockquote>;
      case "ul":
        return <ul className="my-2" key={i}>{serialize(node.children)}</ul>;
      case "ol":
        return <ol className="my-2" key={i}>{serialize(node.children)}</ol>;
      case "li":
        return <li className="my-2" key={i}>{serialize(node.children)}</li>;
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );
      case "image":
        return <img src="node.url" key={i} />;

      default:
        return <p className="my-2" key={i}>{serialize(node.children)}</p>;
    }
  });

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getBlogPost(params.slug);
  if (typeof blogPost.featuredImage === "string") {
    return;
  }
  blogPost.content;

  return (
    <main>
      <ImageSection
        priority
        image={blogPost.featuredImage}
        navbar
        halfHeight
        bgClassName="bg-gradient-to-b from-black to-transparent to-40% opacity-30"
      />
      <div className="container mx-auto pt-10 px-10">
        <h1 className="text-5xl my-4">{blogPost.title}</h1>
        <h2 className="text-xl my-4">{blogPost.description}</h2>
        <br />
        {serialize(blogPost.content)}
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
