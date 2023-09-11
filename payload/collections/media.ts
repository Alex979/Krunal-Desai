import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "https://krunal-desai.imgix.net",
    mimeTypes: ["image/*"],
    disableLocalStorage: true,
    adminThumbnail: ({ doc }) =>
      `https://krunal-desai.imgix.net/${doc.filename}?w=300`,
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

export default Media;
