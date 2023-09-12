"use client";

import Image, { ImageProps } from "next/image";
import imgixImageLoader from "@/lib/image-loader";
import { CSSProperties } from "react";

interface ImgixProps extends Omit<ImageProps, 'alt'> {
  square?: boolean | undefined;
  alt: string;
}

export default function Imgix({ square, ...props }: ImgixProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={imgixImageLoader(square)} {...props} />;
}
