import { GlobalConfig } from "payload";

const BlogPage: GlobalConfig = {
  slug: "blog-page",
  fields: [
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default BlogPage;
