import { GlobalConfig } from "payload";

const Newsletter: GlobalConfig = {
  slug: "newsletter",
  fields: [
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Newsletter;
