import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "https://krunal-desai.imgix.net",
    mimeTypes: ["image/*"],
    disableLocalStorage: true,
    adminThumbnail: ({ doc }) => {
      const urlSafeFilename = encodeURIComponent(doc.filename as string);
      return `https://krunal-desai.imgix.net/${urlSafeFilename}?w=300`;
    },
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

export default Media;
