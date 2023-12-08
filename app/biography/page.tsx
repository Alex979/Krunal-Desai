import ImageSection from "@/components/ImageSection";
import { getBiographyPage } from "@/lib/globals";
import fancyDividerDark from "@/images/fancy-divider-dark.png";
import fancyDividerLight from "@/images/fancy-divider-light.png";
import Image from "next/image";

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
      <ImageSection noTopPadding bgClassName="bg-stone-100" variableHeightOnMobile>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-3xl p-8 space-y-8">
            <Image
              src={fancyDividerDark}
              width={200}
              alt="fancy divider"
              className="mx-auto"
            />
            <p className="text-lg md:text-2xl text-slate-600 leading-normal text-center">
              {biographyPage.biographyText}
            </p>
            <Image
              src={fancyDividerDark}
              width={200}
              alt="fancy divider"
              className="mx-auto rotate-180"
            />
          </div>
        </div>
      </ImageSection>
      <ImageSection
        noTopPadding
        image={biographyPage.conservationSection.image}
        bgClassName="bg-black opacity-40"
        variableHeightOnMobile
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-3xl p-8 space-y-8">
            <p className="text-lg md:text-2xl text-white leading-normal text-center">
              {biographyPage.conservationSection.text}
            </p>
          </div>
        </div>
      </ImageSection>
    </main>
  );
}
