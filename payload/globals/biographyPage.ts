import { GlobalConfig } from "payload";

const BiographyPage: GlobalConfig = {
  slug: "biography-page",
  fields: [
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "biographyText",
      type: "text",
      required: true,
    },
    {
      name: "conservationSection",
      type: "group",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        }
      ]
    }
  ],
};

export default BiographyPage;
