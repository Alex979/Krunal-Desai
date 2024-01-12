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
  variableHeightOnMobile?: boolean;
  removeBgOnMobile?: boolean;
}

export default function ImageSection({
  children,
  image,
  bgClassName = "bg-black opacity-20",
  priority,
  halfHeight,
  navbar,
  noTopPadding,
  variableHeightOnMobile,
  removeBgOnMobile,
}: ImageSectionProps) {
  const containerHeight = variableHeightOnMobile
    ? halfHeight
      ? "md:h-[50vh]"
      : "md:h-screen"
    : halfHeight
    ? "h-[50vh]"
    : "h-[95vh] md:h-screen";
  const containerPadding = noTopPadding ? "md:px-3 md:pb-3" : "md:p-3";
  const containerClasses = `w-full ${containerHeight} ${containerPadding}`;

  return (
    <div className={containerClasses}>
      <div className="w-full h-full relative">
        {navbar && <Navbar theme="light" />}
        {image && (
          <Imgix
            className={"absolute inset-0 select-none -z-10" + (removeBgOnMobile ? " hidden md:block" : "")}
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
        <div className={"absolute inset-0 -z-10 " + bgClassName + (removeBgOnMobile ? " hidden md:block" : "")}></div>
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
