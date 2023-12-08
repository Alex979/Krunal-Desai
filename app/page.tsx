import Image from "next/image";
import fancySeparator from "./FancySeparator.svg";
import scrollIndicator from "./ScrollIndicator.svg";
import { Libre_Baskerville } from "next/font/google";
import ImageSection from "@/components/ImageSection";
import { getHomePage } from "@/lib/globals";

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
        bgClassName=""
        noTopPadding
      >
        <div className="w-full h-full flex items-center text-white">
          <p
            className={
              "font-bold mx-9 leading-relaxed lg:w-1/3 " +
              libreBaskerville.className
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
    </main>
  );
}
