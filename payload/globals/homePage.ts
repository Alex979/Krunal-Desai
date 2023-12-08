import { GlobalConfig } from "payload/types";

const HomePage: GlobalConfig = {
  slug: "home-page",
  fields: [
    {
      name: "firstSection",
      type: "group",
      fields: [
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ]
    },
    {
      name: "secondSection",
      type: "group",
      fields: [
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ]
    }
  ],
};

export default HomePage;
