import ImageSection from "@/components/ImageSection";
import { getFaqPage } from "@/lib/globals";

export default async function FaqPage() {
  const faqPage = await getFaqPage();

  if (typeof faqPage.featuredImage === "string") {
    return;
  }

  return (
    <main>
      <ImageSection
        image={faqPage.featuredImage}
        priority
        navbar
        bgClassName="bg-gradient-to-b from-black to-transparent to-20% opacity-30"
      ></ImageSection>
      <div className="w-full max-w-3xl mx-auto p-12">
        <h1 className="text-4xl font-bold text-center mt-4 mb-16 leading-snug">
          Frequently Asked Questions
        </h1>
        <div className="space-y-16">
          {faqPage.faqs?.map((faq, index) => {
            return (
              <div key={index}>
                <h1 className="text-3xl font-bold leading-snug my-4">
                  {faq.question}
                </h1>
                <p className="text-xl leading-relaxed my-4 text-justify">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
