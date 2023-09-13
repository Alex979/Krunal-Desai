import type { Field } from "payload/types";

const BlurDataUrl: Field = {
  name: "blurDataUrl",
  type: "text",
  admin: {
    hidden: true,
  },
  hooks: {
    beforeChange: [
      async ({ req }) => {
        if (req.files.file !== undefined) {
          const { getPlaiceholder } = await import("plaiceholder");
          const { base64 } = await getPlaiceholder(req.files.file.data, {
            size: 10,
          });
          return base64;
        }
      },
    ],
  },
};

export default BlurDataUrl;
