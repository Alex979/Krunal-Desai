import ImageSection from "@/components/ImageSection";
import { getBiographyPage } from "@/lib/globals";

export default async function BiographyPage() {
  const biographyPage = await getBiographyPage();
  
  if (typeof biographyPage.featuredImage === "string") {
    return;
  }

  return (
    <main>
      <ImageSection
        image={biographyPage.featuredImage}
        priority
        navbar
      ></ImageSection>
    </main>
  );
}
