"use client";

import { ImageLoaderProps } from "next/image";

export default function imgixImageLoader(square?: boolean) {
  if (!square) {
    return ({src, width}: ImageLoaderProps) => imgixImageLoaderInternal(src, width);
  } else {
    return ({src, width}: ImageLoaderProps) => imgixImageLoaderInternal(src, width, width);
  }
}

function imgixImageLoaderInternal(src: string, width: number, height?: number | undefined): string {
  if (height !== undefined) {
    return `https://krunal-desai.imgix.net/${src}?w=${width}&h=${height}&fit=crop&crop=edges`;
  } else {
    return `https://krunal-desai.imgix.net/${src}?w=${width}`;
  }
}
