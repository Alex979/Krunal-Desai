import path from "path";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb"; // database-adapter-import
import Location from "./collections/location";
import Media from "./collections/media";
import { s3Storage } from "@payloadcms/storage-s3";
import BiographyPage from "./globals/biographyPage";
import HomePage from "./globals/homePage";
import ContactPage from "./globals/contactPage";
import BlogPage from "./globals/blogPage";
import BlogPost from "./collections/blogPost";
import FaqPage from "./globals/faqPage";
import GalleryPage from "./globals/galleryPage";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { fileURLToPath } from "url";
import Newsletter from "./globals/newsletter";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  editor: lexicalEditor(),
  collections: [Location, Media, BlogPost],
  globals: [
    HomePage,
    BiographyPage,
    ContactPage,
    BlogPage,
    FaqPage,
    GalleryPage,
    Newsletter,
  ],
  upload: {
    limits: {
      fileSize: 20000000, // 20MB, written in bytes
    },
  },
  typescript: {
    outputFile: path.resolve(dirname, "./payload-types.ts"),
  },
  plugins: [
    s3Storage({
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        region: process.env.S3_REGION as string,
      },
      bucket: process.env.S3_BUCKET as string,
      collections: {
        [Media.slug]: true,
      },
    }),
  ],
});
