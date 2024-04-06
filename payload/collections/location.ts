import { CollectionConfig } from "payload/types";
import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import Slug from "../fields/slug";

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
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return data?.title || `Sublocation ${index}`;
          },
        },
      },
    },
  ],
  admin: {
    useAsTitle: "title",
  },
};

export default Location;
