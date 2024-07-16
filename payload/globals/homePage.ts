import { GlobalConfig } from "payload";

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
      ],
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
      ],
    },
    {
      name: "thirdSection",
      type: "group",
      fields: [
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "portraitPhoto",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "fourthSection",
      type: "group",
      fields: [
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "blogPhoto",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "galleryPhoto",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "instagramBackground",
      type: "group",
      fields: [
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default HomePage;
