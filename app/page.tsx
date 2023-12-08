import Image from "next/image";
import fancySeparator from "./FancySeparator.svg";
import scrollIndicator from "./ScrollIndicator.svg";
import { Libre_Baskerville } from "next/font/google";
import ImageSection from "@/components/ImageSection";
import { getHomePage } from "@/lib/globals";
import Imgix from "@/components/Imgix";
import Link from "next/link";

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

  return (
    <main>
      <ImageSection
        priority
        image={homePage.firstSection.featuredImage}
        navbar
        bgClassName="bg-gradient-to-b from-black via-transparent to-black opacity-30"
      >
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="h-1/2 flex flex-col items-center justify-between mt-20">
            <div className="space-y-3 flex flex-col items-center text-shadow-lg text-center mx-5">
              <h1 className=" text-4xl sm:text-5xl">KRUNAL DESAI</h1>
              <Image src={fancySeparator} alt="separator" width={380} />
              <h1 className="text-2xl sm:text-3xl">Wildlife Photographer</h1>
            </div>
            <div className="text-center">
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
      >
        <div className="w-full h-full flex items-center text-white">
          <p
            className={
              "mx-9 my-16 leading-relaxed text-sm " + libreBaskerville.className
            }
          >
            &quot;My travels began at the blossoming of such primordial valleys,
            <br />
            Where the flute&apos;s melody lit my path through hinterlands under
            moonless nights.
            <br />
            <br />
            Thou vast endlessness offers forth sweet hymns and vessels of
            sunlight, <br />
            Encouraging me to seek out transcendent wisdom of all benevolent
            souls. <br />
            <br />
            Over dignified mountains and stoic deserts,
            <br />
            I wander for the halcyon days of awe be placed into this modest bowl
            of alms. <br />
            <br />
            For my journey&apos;s search delves within the longing for radiant
            dancing in a cove of dreamscapes,
            <br />
            Amongst all those who bear witness to love and reverence — for
            humbled entry, into voyages of storm and still.&quot;
          </p>
        </div>
      </ImageSection>
      <ImageSection
        image={homePage.thirdSection.featuredImage}
        noTopPadding
        variableHeightOnMobile
        bgClassName="bg-black opacity-30"
      >
        <div
          className={
            "w-full h-full flex items-center justify-center flex-col text-white px-9 py-16 " +
            libreBaskerville.className
          }
        >
          <Imgix
            className="rounded-full border-4 border-white"
            src={homePage.thirdSection.portraitPhoto.filename!}
            alt={homePage.thirdSection.portraitPhoto.alt}
            blurDataURL={homePage.thirdSection.portraitPhoto.blurDataUrl!}
            width={100}
            height={100}
            square
          />
          <p className="leading-relaxed text-sm mt-8">
            Since my youth, marveling at the natural world and being so
            fortunate to be able to observe wildlife in their breathtaking
            habitats has instilled a sense of reverence for the pristine
            environments to which I have traveled. Through wildlife photography,
            I have now been blessed to share cherished moments with the stunning
            animals of this planet.
          </p>
        </div>
      </ImageSection>
      <ImageSection noTopPadding bgClassName="" variableHeightOnMobile>
        <div>
          <div
            className={
              "bg-stone-100 text-slate-600 " + libreBaskerville.className
            }
          >
            <div className="w-full aspect-[3/2] relative">
              <Imgix
                src={homePage.fourthSection.blogPhoto.filename!}
                alt={homePage.fourthSection.blogPhoto.alt}
                blurDataURL={homePage.fourthSection.blogPhoto.blurDataUrl!}
                fill
                style={{ objectFit: "cover" }}
                square
                sizes="100vw"
              />
            </div>
            <div className="py-8 px-5 text-center">
              <h2 className="font-bold text-lg">Experience My Journeys</h2>
              <button className="border border-slate-600 py-3 px-5 text-sm mt-5 mx-auto block">
                <Link href="/">View Blog</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={
              "bg-stone-100 text-slate-600 mt-3 " + libreBaskerville.className
            }
          >
            <div className="w-full aspect-[3/2] relative">
              <Imgix
                src={homePage.fourthSection.galleryPhoto.filename!}
                alt={homePage.fourthSection.galleryPhoto.alt}
                blurDataURL={homePage.fourthSection.galleryPhoto.blurDataUrl!}
                fill
                style={{ objectFit: "cover" }}
                square
                sizes="100vw"
              />
            </div>
            <div className="py-8 px-5 text-center">
              <h2 className="font-bold text-lg">Wilderness of the World</h2>
              <button className="border border-slate-600 py-3 px-5 text-sm mt-5 mx-auto block">
                <Link href="/">View Gallery</Link>
              </button>
              <button className="border border-slate-600 py-3 px-5 text-sm mt-5 mx-auto block">
                <Link href="/">View Map</Link>
              </button>
            </div>
          </div>
        </div>
      </ImageSection>
    </main>
  );
}
