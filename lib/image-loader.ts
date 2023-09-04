import { ImageLoaderProps } from "next/image";

export default function netlifyImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  return `${window.location.origin}/${src}?nf_resize=fit&w=${width}`;
}
