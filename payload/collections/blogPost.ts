import { CollectionConfig } from "payload/types";
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
  ],
  admin: {
    useAsTitle: "title",
  },
};

export default BlogPost;
