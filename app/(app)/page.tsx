import Image from "next/image";
import fancySeparator from "./FancySeparator.svg";
import scrollIndicator from "./ScrollIndicator.svg";
import { Libre_Baskerville } from "next/font/google";
import ImageSection from "@/components/ImageSection";
import { getHomePage } from "@/lib/globals";
import Imgix from "@/components/Imgix";
import Link from "next/link";
import BodyText from "@/components/BodyText";
import InstagramEmbed from "@/components/InstagramEmbed";
import NewsletterSection from "@/components/NewsletterSection";
import AosTemplate from "@/components/AosTemplate";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function Home() {
  const homePage = await getHomePage();

  if (typeof homePage.firstSection.featuredImage === "string") {
    return;
  }

  if (typeof homePage.secondSection.featuredImage === "string") {
    return;
  }

  if (typeof homePage.thirdSection.featuredImage === "string") {
    return;
  }

  if (typeof homePage.thirdSection.portraitPhoto === "string") {
    return;
  }

  if (typeof homePage.fourthSection.featuredImage === "string") {
    return;
  }

  if (typeof homePage.fourthSection.blogPhoto === "string") {
    return;
  }

  if (typeof homePage.fourthSection.galleryPhoto === "string") {
    return;
  }

  if (typeof homePage.instagramBackground.featuredImage === "string") {
    return;
  }

  return (
    <AosTemplate>
      <main>
        <ImageSection
          priority
          image={homePage.firstSection.featuredImage}
          navbar
          bgClassName="bg-gradient-to-b from-black via-transparent to-black opacity-30"
        >
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="h-1/2 flex flex-col items-center justify-between mt-20">
              <div
                data-aos="fade" data-aos-delay="0"
                className="space-y-3 flex flex-col items-center text-shadow-lg text-center mx-5"
              >
                <h1 className=" text-4xl sm:text-5xl">KRUNAL DESAI</h1>
                <Image src={fancySeparator} alt="separator" width={380} />
                <h1 className="text-2xl sm:text-3xl">Wildlife Photographer</h1>
              </div>
              <div className="text-center" data-aos="fade" data-aos-delay="300">
                <p>SCROLL</p>
                <Image
                  className="mx-auto w-6 mt-2"
                  src={scrollIndicator}
                  alt="scroll indicator"
                />
              </div>
            </div>
          </div>
        </ImageSection>
        <ImageSection
          image={homePage.secondSection.featuredImage}
          noTopPadding
          variableHeightOnMobile
          removeBgOnMobile
          bgClassName="bg-gradient-to-t from-white to-transparent to-40% opacity-50"
        >
          <div className="w-full h-full flex flex-col items-center justify-between text-center py-12" data-aos="fade">
            <BodyText className="mx-10 md:font-bold">
              My travels began at the blossoming of such primordial valleys,
              <br />
              Where the flute&apos;s melody lit my path through hinterlands
              under moonless nights.
              <br />
              Thou vast endlessness offers forth sweet hymns and vessels of
              sunlight, <br />
              Encouraging me to seek out transcendent wisdom of all benevolent
              souls. <br />
            </BodyText>
            <BodyText className="mx-10 md:font-bold mt-10">
              Over dignified mountains and stoic deserts,
              <br />
              I wander for the halcyon days of awe be placed into this modest
              bowl of alms.
              <br />
              For my journey&apos;s search delves within the longing for radiant
              dancing in a cove of dreamscapes,
              <br />
              Amongst all those who bear witness to love and reverence — for
              humbled entry, into voyages of storm and still.
            </BodyText>
          </div>
          <div className="w-full aspect-[3/2] relative md:hidden">
            <Imgix
              className=""
              src={homePage.secondSection.featuredImage.filename!}
              alt={homePage.secondSection.featuredImage.alt}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={
                homePage.secondSection.featuredImage.blurDataUrl || undefined
              }
              sizes="100vw"
            />
          </div>
        </ImageSection>
        <ImageSection
          image={homePage.thirdSection.featuredImage}
          noTopPadding
          bgClassName=""
          variableHeightOnMobile
          removeBgOnMobile
        >
          <div
            className={
              "w-full flex items-center justify-center flex-col text-slate-600 md:text-gray-800 " +
              libreBaskerville.className
            }
          >
            <div className="flex flex-col md:flex-row items-center justify-center px-10 py-12" data-aos="fade">
              <Imgix
                className="rounded-full border-2 border-slate-500 md:border-gray-800 shadow-md md:shadow-none w-28 md:w-40 md:mr-10"
                src={homePage.thirdSection.portraitPhoto.filename!}
                alt={homePage.thirdSection.portraitPhoto.alt}
                blurDataURL={
                  homePage.thirdSection.portraitPhoto.blurDataUrl || undefined
                }
                width={200}
                height={200}
                square
              />
              <BodyText className="mt-8 md:m-0 max-w-2xl md:font-bold">
                Since my youth, marveling at the natural world and being so
                fortunate to be able to observe wildlife in their breathtaking
                habitats has instilled a sense of reverence for the pristine
                environments to which I have traveled. Through wildlife
                photography, I have now been blessed to share cherished moments
                with the stunning animals of this planet.
              </BodyText>
            </div>
            {/* <div className="w-full aspect-[3/2] relative md:hidden">
            <Imgix
              className=""
              src={homePage.thirdSection.featuredImage.filename!}
              alt={homePage.thirdSection.featuredImage.alt}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={homePage.thirdSection.featuredImage.blurDataUrl}
              sizes="100vw"
            />
          </div> */}
          </div>
        </ImageSection>
        <ImageSection
          image={homePage.fourthSection.featuredImage}
          noTopPadding
          bgClassName=""
          variableHeightOnMobile
          removeBgOnMobile
        >
          <div className="w-full h-full flex items-center justify-end">
            <div className="w-full xl:w-1/2 flex justify-center">
              <div className="w-full md:max-w-md m-auto xl:m-0">
                <div
                  className={
                    "bg-stone-100 text-slate-600 md:shadow-xl " +
                    libreBaskerville.className
                  }
                >
                  <div className="w-full aspect-[3/2] relative">
                    <Imgix
                      className="p-3 md:p-5"
                      src={homePage.fourthSection.blogPhoto.filename!}
                      alt={homePage.fourthSection.blogPhoto.alt}
                      blurDataURL={
                        homePage.fourthSection.blogPhoto.blurDataUrl ||
                        undefined
                      }
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <div className="py-8 px-5 text-center">
                    <h2 className="font-bold text-lg">
                      Experience My Journeys
                    </h2>
                    <button className="border border-slate-600 hover:bg-slate-600 hover:text-stone-100 transition py-3 px-5 text-sm mt-5 mx-auto block">
                      <Link href="/">View Blog</Link>
                    </button>
                  </div>
                  <div className="w-full aspect-[3/2] relative">
                    <Imgix
                      className="p-3 md:p-5"
                      src={homePage.fourthSection.galleryPhoto.filename!}
                      alt={homePage.fourthSection.galleryPhoto.alt}
                      blurDataURL={
                        homePage.fourthSection.galleryPhoto.blurDataUrl ||
                        undefined
                      }
                      fill
                      style={{ objectFit: "cover" }}
                      square
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <div className="py-8 px-5 text-center">
                    <h2 className="font-bold text-lg">
                      Wilderness of the World
                    </h2>
                    <button className="border border-slate-600 hover:bg-slate-600 hover:text-stone-100 transition py-3 px-5 text-sm mt-5 mx-auto block">
                      <Link href="/gallery">View Gallery</Link>
                    </button>
                    <button className="border border-slate-600 hover:bg-slate-600 hover:text-stone-100 transition py-3 px-5 text-sm mt-5 mx-auto block">
                      <Link href="/map">View Map</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full aspect-[3/2] relative md:hidden">
            <Imgix
              className=""
              src={homePage.fourthSection.featuredImage.filename!}
              alt={homePage.fourthSection.featuredImage.alt}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={
                homePage.fourthSection.featuredImage.blurDataUrl || undefined
              }
              sizes="100vw"
            />
          </div>
        </ImageSection>
        <ImageSection
          image={homePage.instagramBackground.featuredImage}
          noTopPadding
          variableHeightOnMobile
          bgClassName=""
        >
          <div className="w-full h-full flex items-center justify-center">
            <InstagramEmbed />
          </div>
        </ImageSection>
        <NewsletterSection />
      </main>
    </AosTemplate>
  );
}
