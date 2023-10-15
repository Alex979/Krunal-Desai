import { GlobalConfig } from "payload/types";

const BiographyPage: GlobalConfig = {
  slug: "biography-page",
  fields: [
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ]
};

export default BiographyPage;
