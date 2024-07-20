import { getNewsletter } from "@/lib/globals";
import ImageSection from "./ImageSection";
import NewsletterForm from "./NewsletterForm";
import Imgix from "./Imgix";

export default async function NewsletterSection() {
  const newsletter = await getNewsletter();

  if (typeof newsletter.backgroundImage === "string") {
    return;
  }

  return (
    <>
      <div className="md:px-3">
        <div className="w-full flex items-center justify-center flex-col pt-10 bg-[#87a5e3]">
          <h1 className="text-4xl md:text-5xl my-6 md:my-10 text-white font-bold text-center">
            Join My Newsletter
          </h1>
          <NewsletterForm />
        </div>
      </div>
      <ImageSection
        image={newsletter.backgroundImage}
        noTopPadding
        bgClassName="bg-gradient-to-b from-[#87a5e3] to-transparent to-10%"
        removeBgOnMobile
        variableHeightOnMobile
      >
        <div className="w-full aspect-[3/2] relative md:hidden">
          <Imgix
            className=""
            src={newsletter.backgroundImage.filename!}
            alt={newsletter.backgroundImage.alt}
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={newsletter.backgroundImage.blurDataUrl || undefined}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#87a5e3] to-transparent to-10%"></div>
        </div>
      </ImageSection>
    </>
  );
}
