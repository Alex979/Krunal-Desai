import { CollectionConfig } from "payload";
import Slug from "../fields/slug";
import { revalidatePath } from "next/cache";

const Location: CollectionConfig = {
  slug: "locations",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    Slug,
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "sublocations",
      type: "array",
      interfaceName: "Sublocations",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "shortDescription",
          type: "textarea",
          required: true,
        },
        Slug,
        {
          name: "coordinates",
          type: "point",
          required: true,
        },
        {
          name: "mapThumbnail",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "images",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }) => {
            return data?.title || `Sublocation ${index}`;
          },
        },
      },
    },
  ],
  admin: {
    useAsTitle: "title",
  },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        revalidatePath("/map");
        revalidatePath(`/gallery/${doc.slug}`);
      },
    ],
  },
};

export default Location;
