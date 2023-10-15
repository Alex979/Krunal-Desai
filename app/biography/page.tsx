import ImageSection from "@/components/ImageSection";
import { getBiographyPage } from "@/lib/globals";

export default async function BiographyPage() {
  const biographyPage = await getBiographyPage();

  if (typeof biographyPage.featuredImage === "string") {
    return;
  }

  if (typeof biographyPage.conservationSection.image === "string") {
    return;
  }

  return (
    <main>
      <ImageSection
        image={biographyPage.featuredImage}
        priority
        navbar
      ></ImageSection>
      <ImageSection noTopPadding bgClassName="bg-stone-100">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-3xl p-8">
            <p className="text-lg md:text-2xl text-slate-600 leading-normal">
              {biographyPage.biographyText}
            </p>
          </div>
        </div>
      </ImageSection>
      <ImageSection
        noTopPadding
        image={biographyPage.conservationSection.image}
        bgClassName="bg-black opacity-40"
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-3xl p-8">
            <p className="text-lg md:text-2xl text-white leading-normal">
              {biographyPage.conservationSection.text}
            </p>
          </div>
        </div>
      </ImageSection>
    </main>
  );
}
