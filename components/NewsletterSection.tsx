import { getNewsletter } from "@/lib/globals";
import ImageSection from "./ImageSection";
import NewsletterForm from "./NewsletterForm";

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
    >
      <div className="w-full flex items-center justify-center flex-col pt-10">
        <h1 className="text-4xl md:text-5xl my-6 md:my-10 text-white font-bold text-center">
          Join My Newsletter
        </h1>
        <NewsletterForm />
      </div>
    </ImageSection>
  );
}
