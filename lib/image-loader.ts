"use client";

import { ImageLoaderProps } from "next/image";

const IS_SERVER = typeof window === "undefined";

export default function netlifyImageLoader(square?: boolean) {
  if (process.env.NODE_ENV === 'development') {
    return
  }
  if (!square) {
    return ({src, width}: ImageLoaderProps) => netlifyImageLoaderInternal(src, width);
  } else {
    return ({src, width}: ImageLoaderProps) => netlifyImageLoaderInternal(src, width, width);
  }
}

function netlifyImageLoaderInternal(
  src: string,
  width: number,
  height?: number | undefined,
): string {
  const baseURL = IS_SERVER
    ? process.env.NEXT_PUBLIC_SITE_URL
    : window.location.origin;
    if (baseURL === undefined) {
      throw new Error("baseURL is undefined. Is NEXT_PUBLIC_SITE_URL environmental variable set?");
    }
  if (height !== undefined) {
    return `${baseURL}/${src}?nf_resize=smartcrop&w=${width}&h=${height}`;
  } else {
    return `${baseURL}/${src}?nf_resize=fit&w=${width}`;
  }
}
