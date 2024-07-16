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
    <ImageSection
      image={newsletter.backgroundImage}
      noTopPadding
      bgClassName=""
      variableHeightOnMobile
      removeBgOnMobile
    >
      <div className="w-full flex items-center justify-center flex-col py-10">
        <h1 className="text-4xl md:text-5xl my-6 md:my-10 md:text-white font-bold text-center">
          Join My Newsletter
        </h1>
        <NewsletterForm />
      </div>
      <div className="w-full aspect-[3/2] relative md:hidden">
        <Imgix
          className=""
          src={newsletter.backgroundImage.filename!}
          alt={newsletter.backgroundImage.alt}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL={
            newsletter.backgroundImage.blurDataUrl || undefined
          }
          sizes="100vw"
        />
      </div>
    </ImageSection>
  );
}
