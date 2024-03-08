import ImageSection from "@/components/ImageSection";
import { getBiographyPage } from "@/lib/globals";
import fancyDividerDark from "@/images/fancy-divider-dark.png";
import fancyDividerLight from "@/images/fancy-divider-light.png";
import featherIconDark from "@/images/feather-icon-dark.png";
import Image from "next/image";
import BodyText from "@/components/BodyText";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
        bgClassName="bg-gradient-to-b from-black to-transparent to-20% opacity-30"
      ></ImageSection>
      <ImageSection noTopPadding bgClassName="" variableHeightOnMobile>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-3xl p-12 space-y-8">
            <Image
              src={featherIconDark}
              width={150}
              alt="feather icon"
              className="mx-auto"
            />
            <BodyText>{biographyPage.biographyText}</BodyText>
          </div>
        </div>
      </ImageSection>
      <ImageSection
        noTopPadding
        image={biographyPage.conservationSection.image}
        bgClassName=""
        halfHeight
      ></ImageSection>
      <ImageSection noTopPadding bgClassName="" variableHeightOnMobile>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-3xl p-12 space-y-8">
            <Image
              src={featherIconDark}
              width={150}
              alt="feather icon"
              className="mx-auto"
            />
            <BodyText>{biographyPage.conservationSection.text}</BodyText>
          </div>
        </div>
      </ImageSection>
    </main>
  );
}
