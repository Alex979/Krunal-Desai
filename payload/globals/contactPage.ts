import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

const ContactPage: GlobalConfig = {
  slug: "contact-page",
  fields: [
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        revalidatePath("/contact");
      },
    ],
  },
};

export default ContactPage;
