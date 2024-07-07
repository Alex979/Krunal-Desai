import { CollectionConfig } from "payload";
import Slug from "../fields/slug";

const BlogPost: CollectionConfig = {
  slug: "blog-posts",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    Slug,
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      // admin: {
      //   elements: [
      //     "h1",
      //     "h2",
      //     "h3",
      //     "h4",
      //     "h5",
      //     "h6",
      //     "blockquote",
      //     "link",
      //     "ol",
      //     "ul",
      //     "textAlign",
      //     "indent",
      //     "upload",
      //   ],
      // },
    },
  ],
  admin: {
    useAsTitle: "title",
  },
};

export default BlogPost;
