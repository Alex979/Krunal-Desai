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
      const classes = [];

      // @ts-ignore
      if (node.bold) {
        classes.push("font-bold");
      }

      // @ts-ignore
      if (node.italic) {
        classes.push("italic");
      }

      // @ts-ignore
      if (node.underline) {
        classes.push("underline");
      }

      // @ts-ignore
      if (node.strikethrough) {
        classes.push("line-through");
      }

      // @ts-ignore
      if (node.code) {
        classes.push("font-mono");
      }

      // Handle other leaf types here...

      let text = <span className={classes.join(" ")}>{node.text}</span>;

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    const classes = [];
    // @ts-ignore
    if (node.textAlign) {
      // @ts-ignore
      switch (node.textAlign) {
        case "left":
          classes.push("text-left");
          break;
        case "center":
          classes.push("text-center");
          break;
        case "right":
          classes.push("text-right");
          break;
      }
    }

    const className = classes.join(" ");

    switch (node.type) {
      case "h1":
        return (
          <h1 className={`${className} text-5xl mt-8 mb-4 font-bold`} key={i}>
            {serialize(node.children)}
          </h1>
        );
      case "h2":
        return (
          <h2 className={`${className} text-4xl mt-8 mb-4 font-bold`} key={i}>
            {serialize(node.children)}
          </h2>
        );
      case "h3":
        return (
          <h3 className={`${className} text-3xl mt-8 mb-4 font-bold`} key={i}>
            {serialize(node.children)}
          </h3>
        );
      case "h4":
        return (
          <h4 className={`${className} text-2xl mt-8 mb-4 font-bold`} key={i}>
            {serialize(node.children)}
          </h4>
        );
      case "h5":
        return (
          <h5 className={`${className} text-xl mt-8 mb-4 font-bold`} key={i}>
            {serialize(node.children)}
          </h5>
        );
      case "h6":
        return (
          <h6 className={`${className} text-lg mt-8 mb-4 font-bold`} key={i}>
            {serialize(node.children)}
          </h6>
        );
      case "blockquote":
        return (
          <blockquote
            className={`${className} my-2 border-l border-slate-400 pl-4`}
            key={i}
          >
            {serialize(node.children)}
          </blockquote>
        );
      case "ul":
        return (
          <ul className={`${className} my-6 list-disc list-inside`} key={i}>
            {serialize(node.children)}
          </ul>
        );
      case "ol":
        return (
          <ol className={`${className} my-6 list-decimal list-inside`} key={i}>
            {serialize(node.children)}
          </ol>
        );
      case "li":
        return (
          <li className={`${className} my-2`} key={i}>
            {serialize(node.children)}
          </li>
        );
      case "link":
        return (
          <a
            className={`${className} text-sky-500`}
            href={node.url}
            target={node.newTab === true ? "_blank" : undefined}
            key={i}
          >
            {serialize(node.children)}
          </a>
        );
      case "indent":
        return (
          <div className={`${className} ml-4`} key={i}>
            {serialize(node.children)}
          </div>
        );
      case "upload":
        return (
          <Imgix
            className={`${className} my-8 w-full`}
            src={node.value.filename}
            alt={node.value.alt}
            placeholder="blur"
            blurDataURL={node.value.blurDataUrl}
            width={node.value.width}
            height={node.value.height}
            key={i}
            // fill
            // style={{ objectFit: "cover" }}
            sizes="100vh"
          />
        );
      default:
        return (
          <p className={`${className} my-2`} key={i}>
            {serialize(node.children)}
          </p>
        );
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
  console.log(JSON.stringify(blogPost.content, null, 2));

  return (
    <main>
      <ImageSection
        priority
        image={blogPost.featuredImage}
        navbar
        halfHeight
        bgClassName="bg-gradient-to-b from-black to-transparent to-40% opacity-30"
      />
      <div className="container mx-auto pt-10 px-10 text-xl leading-relaxed">
        <h1 className="text-6xl my-8">{blogPost.title}</h1>
        <h2 className="text-3xl mt-4 mb-16">{blogPost.description}</h2>
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
