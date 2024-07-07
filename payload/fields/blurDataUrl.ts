import type { Field } from "payload";

const BlurDataUrl: Field = {
  name: "blurDataUrl",
  type: "text",
  admin: {
    hidden: true,
  },
  hooks: {
    beforeChange: [
      async ({ req }) => {
        if (req.file !== undefined) {
          const { getPlaiceholder } = await import("plaiceholder");
          const { base64 } = await getPlaiceholder(req.file.data, {
            size: 10,
          });
          return base64;
        }
      },
    ],
  },
};

export default BlurDataUrl;
