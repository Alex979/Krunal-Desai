"use client";

import { ImageLoaderProps } from "next/image";

const IS_SERVER = typeof window === "undefined";

export default function netlifyImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const baseURL = IS_SERVER
    ? process.env.NEXT_PUBLIC_SITE_URL
    : window.location.origin;
    if (baseURL === undefined) {
      throw new Error("baseURL is undefined. Is NEXT_PUBLIC_SITE_URL environmental variable set?");
    }
  return `${baseURL}/${src}?nf_resize=fit&w=${width}`;
}
