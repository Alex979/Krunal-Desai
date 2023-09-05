import { Config } from "@staticcms/core";

const config: Config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  media_folder: "public/uploads",
  public_folder: "/uploads",
  media_library: {
    max_file_size: 20000000, // 20MB
  },
  collections: [
    {
      name: "locations",
      label: "Locations",
      folder: "data/locations",
      create: true,
      format: "json",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        {
          name: "thumbnail",
          label: "Featured Image",
          widget: "image",
        },
        {
          name: "sublocations",
          label: "Sublocations",
          widget: "list",
          fields: [
            { name: "title", label: "Title", widget: "string" },
            {
              name: "coordinates",
              label: "Coordinates",
              widget: "map",
            },
            {
              name: "thumbnail",
              label: "Featured Image",
              widget: "image",
            },
            {
              name: "images",
              label: "Images",
              widget: "image",
              multiple: true,
            },
          ],
        },
      ],
    },
  ],
};

export default config;
