import type { Field } from "payload/types";
import slugify from "slugify";

const Slug: Field = {
  name: "slug",
  type: "text",
  index: true,
  admin: {
    hidden: true,
  },
  hooks: {
    beforeValidate: [
      (args) => {
        return slugify(args.siblingData.title, {
          lower: true,
          strict: true,
        });
      },
    ],
  },
};

export default Slug;