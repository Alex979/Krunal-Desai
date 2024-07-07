import { GlobalConfig } from "payload";

const GalleryPage: GlobalConfig = {
  slug: "gallery-page",
  fields: [
    {
      name: "locations",
      type: "relationship",
      relationTo: "locations",
      hasMany: true,
      required: true,
    },
  ],
};

export default GalleryPage;
