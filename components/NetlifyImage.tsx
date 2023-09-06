"use client";

import Image from "next/image";
import netlifyImageLoader from "@/lib/image-loader";
import { CSSProperties } from "react";

interface NetlifyImageProps {
  src: string;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
  fill?: boolean | undefined;
  sizes?: string | undefined;
  style?: CSSProperties | undefined;
  square?: boolean | undefined;
  priority?: boolean | undefined;
  className?: string | undefined;
}

export default function NetlifyImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  style,
  square,
  priority,
  className,
}: NetlifyImageProps) {
  return (
    <Image
      loader={netlifyImageLoader(square)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      style={style}
      priority={priority}
      className={className}
    />
  );
}
