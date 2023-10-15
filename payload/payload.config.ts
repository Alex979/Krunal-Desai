import path from "path";
import { buildConfig } from "payload/config";
import Location from "./collections/location";
import Media from "./collections/media";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import BiographyPage from "./globals/biographyPage";

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
  collections: [Location, Media],
  globals: [BiographyPage],
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
