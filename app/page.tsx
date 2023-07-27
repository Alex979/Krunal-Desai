import Image from "next/image";
import lion from "./lion.jpg";
import rhino from "./rhino.jpg";
import wolf from "./wolf.jpg";
import fancySeparator from "./FancySeparator.svg";
import signature from "./signature.png";
import scrollIndicator from "./ScrollIndicator.svg";
import MapGallery from "./MapGallery";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <main>
      <div className="relative w-full h-screen">
        <Image
          className="absolute inset-0 -z-10"
          src={lion}
          alt="lion"
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          priority
          sizes="200vh"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-30 pointer-events-none"></div>
        <div className="absolute w-full h-20 flex">
          <div className="flex items-center">
            <Image className="mx-5 w-64" src={signature} alt="signature" />
          </div>
          <div className="grow">{/* Put nav links here */}</div>
        </div>
        <div className="absolute flex items-center justify-center w-full h-full text-white">
          <div className="h-1/2 flex flex-col items-center justify-between mt-20">
            <div className="space-y-3 flex flex-col items-center text-shadow-lg text-center">
              <h1 className="text-5xl">KRUNAL DESAI</h1>
              <Image src={fancySeparator} alt="separator" width={380} />
              <h1 className="text-3xl">Wildlife Photographer</h1>
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
      </div>
      <div className="relative w-full h-screen">
        <Image
          className="absolute inset-0 -z-10"
          src={wolf}
          alt="wolf"
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          priority
          sizes="200vh"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div> */}
        <div className="absolute flex items-center justify-center w-full h-full text-white">
          <p
            className={
              "font-bold mx-9 text-center leading-relaxed " +
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
      </div>
      <MapGallery />
    </main>
  );
}
