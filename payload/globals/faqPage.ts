import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

const FaqPage: GlobalConfig = {
  slug: "faq-page",
  fields: [
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "faqs",
      type: "array",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        revalidatePath("/biography");
      },
    ],
  },
};

export default FaqPage;
