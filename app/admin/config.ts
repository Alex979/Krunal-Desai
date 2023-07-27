import { Config } from "@staticcms/core";

const config: Config = {
  backend: {
    name: 'git-gateway',
    branch: 'main' // Branch to update (optional; defaults to main)
  },
  media_folder: 'public/uploads',
  public_folder: '/uploads',
  collections: [
    {
      name: 'locations',
      label: 'Locations',
      folder: 'data/locations',
      create: true,
      fields: [
        { label: 'Name', name: 'name', widget: 'string'}
      ]
    }
  ]
};

export default config;
