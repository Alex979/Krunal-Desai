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
          name: "coordinates",
          label: "Coordinates",
          widget: "map",
        },
        {
          name: 'thumbnail',
          label: 'Featured Image',
          widget: 'image',
        }
      ],
    },
    {
      name: "photographs",
      label: "Photographs",
      folder: "data/photographs",
      create: true,
      format: "json",
      identifier_field: 'id',
      fields: [
        { name: 'id', label: 'ID', widget: 'uuid' },
        {
          name: 'location',
          label: 'Location',
          widget: 'relation',
          collection: 'locations',
          search_fields: ['title'],
          value_field: '{{slug}}',
          display_fields: ['title'],
        },
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
        }
      ]
    }
  ],
};

export default config;
