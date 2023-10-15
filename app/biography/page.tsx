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
      <ImageSection noTopPadding bgClassName="bg-stone-100">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-3xl p-8">
            <p className="text-2xl text-slate-600 leading-normal">
              My reverence for the natural world has been a cornerstone of my
              persona since my youth. As a five-year-old, I vividly recall how
              enchanted I was at the sight of hundreds of wintering waterfowl in
              the lake behind my home. From that moment onwards, I strived to
              better understand wildlife through spending as much time as I
              could in nature. The beauty of life on Earth led me to nurture my
              fondness for wildlife photography, and I realized this interest
              would grant me more personal experience with animals. This passion
              has allowed me to travel the globe to witness the splendor of
              wildlife in their natural habitats, and from this hobby, I have
              been able to encapsulate the intimate behavior of animals through
              photography. In my experience, wildlife photography is not about
              chasing towards the best photo, but rather observing the
              captivating moments I am blessed to have with different species in
              their stunning ecosystems.
            </p>
          </div>
        </div>
      </ImageSection>
    </main>
  );
}
