import { revalidatePath } from "next/cache";
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
  hooks: {
    afterChange: [
      async () => {
        revalidatePath("/gallery");
      },
    ],
  },
};

export default GalleryPage;
