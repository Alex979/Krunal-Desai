import Navbar from "./Navbar";
import { Media } from "@/payload/payload-types";
import Imgix from "./Imgix";
import { ReactNode } from "react";

interface ImageSectionProps {
  children?: ReactNode;
  image?: Media;
  bgClassName?: string;
  priority?: boolean;
  halfHeight?: boolean;
  navbar?: boolean;
  noTopPadding?: boolean;
}

export default function ImageSection({
  children,
  image,
  bgClassName = "bg-black opacity-20",
  priority,
  halfHeight,
  navbar,
  noTopPadding,
}: ImageSectionProps) {
  return (
    <div
      className={
        "w-full " +
        (halfHeight ? "h-[50vh] " : "h-screen ") +
        (noTopPadding ? "px-3 pb-3" : "p-3")
      }
    >
      <div className="w-full h-full relative">
        {navbar && <Navbar theme="light" />}
        {image && (
          <Imgix
            className="absolute inset-0 select-none"
            src={image.filename!}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={image.blurDataUrl}
            priority={priority}
            sizes={`(max-aspect-ratio: ${image.width!}/${
              halfHeight ? image.height! * 2 : image.height!
            }) ${Math.floor(
              (image.width! /
                (halfHeight ? image.height! * 2 : image.height!)) *
                100
            )}vh, 100vw`}
          />
        )}
        <div className={"absolute inset-0 " + bgClassName}></div>
        <div className="absolute w-full h-full">{children}</div>
      </div>
    </div>
  );
}
