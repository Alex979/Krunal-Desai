import path from "path";
import { buildConfig } from "payload/config";
import Location from "./collections/location";
import Media from "./collections/media";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import BiographyPage from "./globals/biographyPage";
import HomePage from "./globals/homePage";
import ContactPage from "./globals/contactPage";
import BlogPage from "./globals/blogPage";
import BlogPost from "./collections/blogPost";
import FaqPage from "./globals/faqPage";

const mediaAdapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    },
    region: process.env.S3_REGION as string,
  },
  bucket: process.env.S3_BUCKET as string,
});

export default buildConfig({
  collections: [Location, Media, BlogPost],
  globals: [HomePage, BiographyPage, ContactPage, BlogPage, FaqPage],
  upload: {
    limits: {
      fileSize: 20000000, // 20MB, written in bytes
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "./payload-types.ts"),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: mediaAdapter,
        },
      },
    }),
  ],
});
