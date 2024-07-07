import { GlobalConfig } from "payload";

const ContactPage: GlobalConfig = {
  slug: "contact-page",
  fields: [
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    }
  ],
};

export default ContactPage;
