import { CollectionConfig } from "payload/types";
import BlurDataUrl from "../fields/blurDataUrl";

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
      required: true,
      admin: {
        description:
          'Short description of the image for visually impaired users. Ex: "Green iguana"',
      },
    },
    BlurDataUrl,
  ],
};

export default Media;
