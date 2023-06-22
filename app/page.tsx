import Image from 'next/image'
import lion from './lion.jpg'
import fancySeparator from './FancySeparator.svg'
import signature from './signature.png'
import scrollIndicator from './ScrollIndicator.svg'
import MapGallery from './MapGallery'

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-screen">
        <Image className="absolute inset-0 -z-10" src={lion} alt="lion" fill style={{ objectFit: 'cover' }} placeholder="blur" priority sizes="200vh" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-30 pointer-events-none"></div>
        <div className="absolute w-full h-20 flex">
          <div className="flex items-center">
            <Image className="mx-5 w-64" src={signature} alt="signature" />
          </div>
          <div className="grow">
            {/* Put nav links here */}
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full text-white">
          <div className="h-1/2 flex flex-col items-center justify-between mt-20">
            <div className="space-y-3 flex flex-col items-center text-shadow-lg text-center">
              <h1 className="text-5xl">KRUNAL DESAI</h1>
              <Image src={fancySeparator} alt="separator" width={380} />
              <h1 className="text-3xl">Wildlife Photographer</h1>
            </div>
            <div className="text-center">
              <p>SCROLL</p>
              <Image className="mx-auto w-6 mt-2" src={scrollIndicator} alt="scroll indicator" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-myrtle">
        <MapGallery />
      </div>
    </main>
  )
}
