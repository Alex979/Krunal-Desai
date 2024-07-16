import ImageSection from "@/components/ImageSection";
import { getBiographyPage, getFaqPage } from "@/lib/globals";
import featherIconDark from "@/images/feather-icon-dark.png";
import Image from "next/image";
import BodyText from "@/components/BodyText";

export default async function BiographyPage() {
  const biographyPage = await getBiographyPage();
  const faqPage = await getFaqPage();

  if (typeof biographyPage.featuredImage === "string") {
    return;
  }

  if (typeof biographyPage.conservationSection.image === "string") {
    return;
  }

  if (typeof faqPage.featuredImage === "string") {
    return;
  }

  return (
    <main>
      <ImageSection
        image={biographyPage.featuredImage}
        priority
        navbar
        bgClassName="bg-gradient-to-b from-black to-transparent to-20% opacity-30"
      ></ImageSection>
      <div className="w-full max-w-3xl mx-auto p-8 space-y-8 my-10">
        <Image
          src={featherIconDark}
          width={150}
          alt="feather icon"
          className="mx-auto w-20 md:w-36"
        />
        <BodyText className="md:text-justify">
          {biographyPage.biographyText}
        </BodyText>
        <Image
          src={featherIconDark}
          width={150}
          alt="feather icon"
          className="mx-auto rotate-180 w-20 md:w-36"
        />
      </div>
      <ImageSection
        noTopPadding
        image={biographyPage.conservationSection.image}
        bgClassName=""
        halfHeight
      ></ImageSection>
      <div className="w-full max-w-3xl mx-auto p-8 space-y-8 my-10">
        <Image
          src={featherIconDark}
          width={150}
          alt="feather icon"
          className="mx-auto w-20 md:w-36"
        />
        <BodyText className="md:text-justify">
          {biographyPage.conservationSection.text}
        </BodyText>
        <Image
          src={featherIconDark}
          width={150}
          alt="feather icon"
          className="mx-auto rotate-180 w-20 md:w-36"
        />
      </div>
      <ImageSection
        noTopPadding
        image={faqPage.featuredImage}
        bgClassName=""
        halfHeight
      ></ImageSection>
      <div className="w-full max-w-3xl mx-auto p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-16 leading-snug">
          Frequently Asked Questions
        </h1>
        <div className="space-y-16">
          {faqPage.faqs?.map((faq, index) => {
            return (
              <div key={index}>
                <h1 className="text-2xl md:text-3xl font-bold leading-snug my-4">
                  {faq.question}
                </h1>
                <BodyText className="md:text-justify">
                  {faq.answer}
                </BodyText>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
